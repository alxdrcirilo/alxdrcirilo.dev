<template>
  <div>
    <h1>🏷️ Tags</h1>
    <p>Here you may find all the tags currently in use:</p>
    <ContentList path="/blog" v-slot="{ list }">
      <ul>
        <li v-for="property in ['field', 'language', 'type']" :key="property" style="padding-left: 5%;">
          <u>{{ capitalize(property) }}</u>:
          <span v-for="tag in getUniqueTags(list, property)" :key="tag">
            <div class="tags">
              <NuxtLink :to="`search/${property}?${tag.toLowerCase()}`">
                <code class="chip" :style="getTagStyle(property)">{{ tag.charAt(0).toUpperCase() + tag.slice(1) }}</code>
              </NuxtLink>
            </div>
          </span>
        </li>
      </ul>
    </ContentList>
  </div>
</template>

<script>
export default {
  methods: {
    getUniqueTags(list, property) {
      // Get unique tags
      const uniqueTags = new Set(list.flatMap((article) => article.tags[property]));
      return [...uniqueTags];
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    getTagStyle(property) {
      const colorMap = {
        field: 'tomato',
        language: 'olivedrab',
        type: 'teal',
      };
      return {
        backgroundColor: colorMap[property],
        borderRadius: '4px',
        color: 'whitesmoke',
        fontSize: '11px',
        marginRight: '10px',
      };
    },
  },
};
</script>
