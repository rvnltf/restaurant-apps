const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title');
  I.click(locate('.detail-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('favorite-element');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title');

  const firstFilmTitle = await I.grabTextFrom('.restaurant__title');
  I.click(locate('.detail-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('favorite-element');
  const likedFilmTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('cancel liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title');

  const firstFilmTitle = await I.grabTextFrom('.restaurant__title');
  I.click(locate('.detail-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('favorite-element');
  const likedFilmTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);

  I.amOnPage('/');
  I.seeElement('.restaurant__title');

  I.click(locate('.detail-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
