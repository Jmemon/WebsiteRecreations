let topIdsURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
let idURL1 = 'https://hacker-news.firebaseio.com/v0/item/';
let idURL2 = '.json?print=pretty';

let pageLength = 30;
let page = 0;

async function getTopIDs() {
  let topIds;

  try {
    topIds = await fetch(topIdsURL);
    topIds = await topIds.json();
  }
  catch (err) {
    console.log(err.message);
  }

  return topIds;
}

async function getStories(ids) {
  let stories = new Array(pageLength);

  try {
    for (i = 0; i < pageLength; i++) {
      stories[i] = await fetch(idURL1 + ids[page * pageLength + i] + idURL2);
      stories[i] = await stories[i].json();
    }
  }
  catch (err) {
    console.log(err.message);
  }

  return stories;
}

function buildStories(stories) {
  /*let tag;
  let text;
  let element;

  for (i = 0; i < pageLength; i++) {
    tag = document.createElement("p");
    text = document.createTextNode("p-" + i);
    tag.appendChild(text);
    element = document.getElementById("main-feed");
    element.appendChild(tag);
  }*/

  let feedItem;
  let text;
  let element;

  for (i = 0; i < pageLength; i++) {
    feedItem = document.createElement("div");
  }
}

getTopIDs()
.then(ids => getStories(ids))
.then(stories => buildStories(stories))
.catch(err => console.log(err));
