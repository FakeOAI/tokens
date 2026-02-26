<script setup lang="ts">
import { ref, onMounted } from "vue";

interface AdItem {
  image?: string;
  title?: string;
  description?: string;
  link: string;
}

interface SponsorItem {
  name?: string;
  logo?: string;
  link: string;
}

interface SiteConfig {
  ads?: AdItem[];
  sponsors?: SponsorItem[];
  becomeSponsorLink?: string;
}

const adVisible = ref(true);
function closeAd() {
  adVisible.value = false;
}

const currentAd = ref<AdItem | null>(null);
const displaySponsors = ref<SponsorItem[]>([]);
const showBecomeSponsor = ref(true);
const becomeSponsorLink = ref("/others/sponsor");

onMounted(async () => {
  try {
    const res = await fetch("/site_config.json");
    const config: SiteConfig = await res.json();

    if (config.becomeSponsorLink) {
      becomeSponsorLink.value = config.becomeSponsorLink;
    }

    const ads = config.ads || [];
    if (ads.length > 0) {
      currentAd.value = ads[Math.floor(Math.random() * ads.length)];
    }

    const sponsors = (config.sponsors || []).slice(0, 2);
    displaySponsors.value = sponsors;
    showBecomeSponsor.value = sponsors.length < 2;
  } catch {
    // 加载失败静默处理
  }
});
</script>

<template>
  <div class="aside-sponsors">
    <template v-if="currentAd">
      <div v-show="adVisible" class="vp-ad-card">
        <a
          :href="currentAd.link"
          target="_blank"
          rel="noopener noreferrer"
          class="vp-ad-link-wrap"
        >
          <div v-if="currentAd.image" class="vp-ad-image-wrap">
            <img
              :src="currentAd.image"
              :alt="currentAd.title"
              class="vp-ad-image"
            />
          </div>
          <div
            v-if="currentAd.title || currentAd.description"
            class="vp-ad-body"
          >
            <div v-if="currentAd.title" class="vp-ad-title">
              {{ currentAd.title }}
            </div>
            <div v-if="currentAd.description" class="vp-ad-desc">
              {{ currentAd.description }}
            </div>
          </div>
        </a>
        <div class="vp-ad-footer">
          <span class="vp-ad-label">广告</span>
          <button
            type="button"
            class="vp-ad-close"
            aria-label="关闭广告"
            @click.stop="closeAd"
          >
            ×
          </button>
        </div>
      </div>
    </template>

    <div class="vp-sponsors-title">赞助位</div>

    <a
      v-for="s in displaySponsors"
      :key="s.link"
      :href="s.link"
      target="_blank"
      rel="noopener noreferrer"
      class="vp-sponsor-card"
    >
      <div class="vp-sponsor-brand">
        <img
          v-if="s.logo"
          :src="s.logo"
          :alt="s.name"
          class="vp-sponsor-logo"
        />
        <span v-else class="vp-sponsor-name">{{ s.name }}</span>
      </div>
    </a>

    <a
      v-if="showBecomeSponsor"
      :href="becomeSponsorLink"
      rel="noopener noreferrer"
      class="vp-sponsor-card vp-sponsor-cta"
    >
      成为赞助商
    </a>
  </div>
</template>

<style scoped>
.aside-sponsors {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.vp-sponsors-title {
  color: var(--vp-c-text-3);
  display: block;
  margin: 1em 0 1em;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.vp-sponsor-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 0;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px;
  min-height: 44px;
  box-sizing: border-box;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.vp-sponsor-card:last-of-type {
  margin-bottom: 0;
}

.vp-sponsor-card:hover {
  background-color: color-mix(in srgb, var(--vp-c-bg-soft) 85%, #fff 15%);
}

.vp-sponsor-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.vp-sponsor-logo {
  display: block;
  max-width: 120px;
  width: auto;
  height: 40px;
  object-fit: contain;
  transition: filter 0.2s ease;
}

.vp-sponsor-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.vp-sponsor-slogan {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.vp-sponsor-cta {
  font-size: 11px;
  color: var(--vp-c-text-3);
}

.vp-sponsor-cta:hover {
  color: var(--vp-c-text-2);
}

.vp-ad-card {
  max-width: 336px;
  margin: 0 auto 2px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
}

.dark .vp-ad-card {
  border-color: var(--vp-c-divider);
}

.vp-ad-link-wrap {
  display: block;
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.vp-ad-image-wrap {
  width: 100%;
  padding-top: 20px;
  line-height: 0;
  overflow: visible;
}

.vp-ad-image {
  display: block;
  width: 80%;
  margin: 0 auto;
  object-fit: contain;
}

.vp-ad-body {
  padding: 12px 16px 0;
}

.vp-ad-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}

.vp-ad-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
  white-space: pre-wrap;
}

.vp-ad-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px 8px;
  margin-top: 4px;
}

.vp-ad-label {
  font-size: 11px;
  color: var(--vp-c-text-3);
}

.vp-ad-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  color: var(--vp-c-text-3);
  padding: 0 2px;
}

.vp-ad-close:hover {
  color: var(--vp-c-text-1);
}
</style>
