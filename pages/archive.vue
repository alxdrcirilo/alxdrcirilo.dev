<template>
  <div>
    <h1>📒 Archive</h1>
    <div v-for="year in years" :key="year">
      <ContentList :path="`/blog/${year}`" v-slot="{ list }">
        <section>
          <h4>{{ year }}</h4>
          <div v-for="article in list" :key="article._path">
            <!-- Article -->
            <section class="article-section">
              <NuxtLink :to="`${article._path}`" class="article-title">{{ article.title }}</NuxtLink>
              <ul class="article-details">
                <li>{{ article.description }}</li>
                <li>
                  <strong>Date</strong>: {{ new Date(article.date).toDateString() }}
                  <br>
                  <strong>Tags</strong>:
                  <span v-for="tagType in ['field', 'language', 'type']" :key="tagType">
                    <template v-for="tag in article.tags[tagType]" :key="tag">
                      <div class="tags">
                        <NuxtLink :to="`search/${tagType}?${tag.toLowerCase()}`">
                          <code class="chip" :style="getTagStyle(tagType)">{{ tag.charAt(0).toUpperCase() + tag.slice(1) }}</code>
                        </NuxtLink>
                      </div>
                    </template>
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </ContentList>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: ["2024"],
    };
  },
  methods: {
    getTagStyle(property) {
      const colorMap = {
        field: "tomato",
        language: "olivedrab",
        type: "teal",
      };
      return {
        backgroundColor: colorMap[property],
        borderRadius: "4px",
        color: "whitesmoke",
        fontSize: "11px",
        marginRight: "10px",
      };
    },
  },
};
</script>

<style scoped>
.article-section {
  padding-left: 2%;
}
.article-title {
  font-weight: bold;
}
.article-details {
  padding-left: 2%;
  font-size: 11px;
}
</style>
