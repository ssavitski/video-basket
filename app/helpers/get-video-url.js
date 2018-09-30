/**
 * Build url for video player based on video object passed
 * @param {*} video - object with video params
 */

import { helper } from '@ember/component/helper';

export function getVideoUrl([ video ]) {
  const { kind, link, url } = video;

  // build URL for player for video from youtube
  if (kind && kind.indexOf('youtube') !== -1) {
    return `https://www.youtube.com/embed/${video.id.videoId}?rel=0`;
  }
  // build URL for player for video from vimeo
  if (link && link.indexOf('vimeo.com') !== -1) {
    return video.embed.html.match(/\ssrc=(?:(?:"([^"]*)"))/i)[1] || '';
  }
  // build URL for player for video from dailymotion
  if (url && url.indexOf('dailymotion.com')) {
    return `https://www.dailymotion.com/embed/video/${url.split('/').get('lastObject')}`;
  }

  return '';
}

export default helper(getVideoUrl);
