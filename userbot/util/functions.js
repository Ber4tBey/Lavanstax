/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/

function extractCreator(messageData) {
  try {
    return messageData.media_share.user.username
  } catch (err) {
    console.log(err)
    return undefined
  }
}
function extractImages(messageData) {
  let images = []
  const postImage = extracteImageFromSinglePost(messageData)
  if (postImage) {
    images.push(postImage)
  }
  const carouselImages = extractImagesFromCarousel(messageData)
  if (carouselImages) {
    images = images.concat(carouselImages)
  }
  return images
}
function extractMediaShareUrl(messageData) {
  try {
    return `https://www.instagram.com/p/${messageData.media_share.code}`
  } catch (err) {
    // console.log(err)
    return undefined
  }
}
function extracteImageFromSinglePost(messageData) {
  try {
    return messageData.media_share.image_versions2.candidates[0].url
  } catch (err) {
    // console.log(err)
    return undefined
  }
}
function extractImagesFromCarousel(messageData) {
  try {
    return messageData.media_share.carousel_media.map(mediaObj => mediaObj.image_versions2.candidates[0].url)
  } catch (err) {
    // console.log(err)
    return undefined
  }
}
function extractPostTimestamp(messageData) {
  try {
    return messageData.media_share.taken_at
  } catch (err) {
    // console.log(err)
    return undefined
  }
}
function extractLocation(messageData) {
  const location = {
    coordinates: extractLocationCoordinates(messageData),
    address: extractLocationAddress(messageData),
    city: extractLocationCity(messageData),
    name: extractLocationName(messageData),
    shortName: extractLocationShortName(messageData),
  }
  if (!location.coordinates && !location.address && !location.city && !location.name && !location.shortName) {
    return undefined
  }
  return location
}
function extractLocationCoordinates(messageData) {
  try {
    return {
      lat: messageData.media_share.lat || messageData.media_share.location.lat,
      lng: messageData.media_share.lng || messageData.media_share.location.lng,
    }
  } catch (err) {
    // console.log(err)
    return undefined
  }
}
function extractLocationAddress(messageData) {
  try {
    return messageData.media_share.location.address
  } catch (err) {
    // console.log(err)
    return undefined
  }
}
function extractLocationCity(messageData) {
  try {
    return messageData.media_share.location.city
  } catch (err) {
    // console.log(err)
    return undefined
  }
}
function extractLocationName(messageData) {
  try {
    return messageData.media_share.location.name
  } catch (err) {
    // console.log(err)
    return undefined
  }
}
function extractLocationShortName(messageData) {
  try {
    return messageData.media_share.location.short_name
  } catch (err) {
    // console.log(err)
    return undefined
  }
}

module.exports = {
  extractCreator,
  extractImages,
  extracteImageFromSinglePost,
  extractMediaShareUrl,
  extractImagesFromCarousel,
  extractPostTimestamp,
  extractLocation,
  extractLocationCoordinates,
  extractLocationAddress,
  extractLocationCity,
};
