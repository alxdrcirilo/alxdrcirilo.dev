<template>
  <nav class="toc">
    <header class="toc-header">
      <h3 class="text-xl font-bold">Table of contents</h3>
    </header>
    <ul class="toc-links">
      <li v-for="link of flattenLinks(links)" :key="link.id" :class="`toc-link _${link.depth}`">
        <a :href="`#${link.id}`" :style="`padding: ${(link.depth - 2) * 4}%`">
          {{ link.enumeration }}) {{ link.text }}
        </a>
        <template v-if="link.children">
          <ul>
            <li v-for="childLink in link.children" :key="childLink.id">
              <a :href="`#${childLink.id}`">
                {{ childLink.enumeration }}) {{ childLink.text }}
              </a>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps(["links"]);

const flattenLinks = (links, parentEnumeration = []) => {
  let _links = links
    .map((link, index) => {
      const linkEnumeration = [...parentEnumeration, index + 1];
      let _link = {
        ...link,
        enumeration: linkEnumeration.join("."),
      };
      if (link.children) {
        let flattened = flattenLinks(link.children, linkEnumeration);
        _link.children = flattened;
      }
      return _link;
    })
  return _links;
};
</script>

<style scoped>
a:hover {
 text-decoration: underline; 
}
</style>