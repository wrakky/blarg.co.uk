(function($) {

  'use strict';

  const compileTemplate = (template, data) => {

    return template
      .replace(/\{\{text\}\}/g, data.text)
      .replace(/\{\{id\}\}/g, data.id)
      .replace(/{\{date\}\}/g, data.date)
      .replace(/{\{username\}\}/g, data.username)
      .replace(/{\{name\}\}/g, data.name);

  };

  const myTweetsTemplate = `
    <div class="tweet clearfix">
      <p class="text">{{text}}</p>
      <p class="info">
        <span class="time pull-left small">
          <a class="text-muted" href="https://twitter.com/wrakky/status/{{id}}">
            {{date}}
          </a>
        </span>
        <span class="actions pull-right">
          <a href="https://twitter.com/wrakky/status/{{id}}#reply" data-toggle="tooltip" title="Reply to this tweet">
            <i class="fa fa-reply"></i>
          </a>
          <a href="https://twitter.com/wrakky/status/{{id}}#retweet" data-toggle="tooltip" title="Retweet this">
            <i class="fa fa-retweet"></i>
          </a>
          <a href="https://twitter.com/wrakky/status/{{id}}#favourite" data-toggle="tooltip" title="Favourite this tweet">
            <i class="fa fa-star"></i>
          </a>
        </span>
      </p>
    </div>
  `;

  const blargTweetsTemplate = `
    <div class="tweet clearfix">
      <p class="details">
        <a class="pull-right time" href="https://twitter.com/{{username}}/statuses/{{id}}">
          {{date}}
        </a>
        <a class="name" href="https://twitter.com/{{username}}">
          {{name}}
        </a>
        <br>
        <a class="username" href="https://twitter.com/{{username}}">
          @{{username}}
        </a>
     </p>
     <p class="text">{{text}}</p>
   </div>
  `;

  const generateTweetContent = (tweets, tpl) => {

    let tweetContainer = $('.tweets', '#sidebar');
    tweetContainer.html('');

    for (let i = 0, ilen = tweets.length; i < ilen; i++) {

      let tweet = tweets[i];
      let compiledTpl = compileTemplate(tpl, tweet);

      tweetContainer.append($(compiledTpl));

    }

    $('[data-toggle="tooltip"]', tweetContainer).tooltip()

  };

  const getTweets = (type) => {

    let tpl = type === 'mine' ? myTweetsTemplate : blargTweetsTemplate;
    let cacheKey = `tweets.${type}`;

    if (Blarg.Cache.exists(cacheKey)) {
      generateTweetContent(Blarg.Cache.get(cacheKey), tpl);
    }
    else {
      $.getJSON(`https://api.blarg.co.uk/tweets/${type}`, data => {
        Blarg.Cache.set(cacheKey, data, 5);
        generateTweetContent(data, tpl);
      });
    }

  };

  if (window.TWEET_TYPE) {
    getTweets(window.TWEET_TYPE);
  }

})(jQuery);
