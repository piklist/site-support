<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  
  

  






  
<!-- Mirrored from plugins.trac.wordpress.org/browser/tinymce-advanced/trunk/mce/anchor/plugin.js?annotate=blame&rev=2091071 by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 10 Feb 2022 17:23:01 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
    <title>
      plugin.js in tinymce-advanced/trunk/mce/anchor
     – WordPress Plugin Repository
    </title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--[if IE]><script type="text/javascript">
      if (/^#__msie303:/.test(window.location.hash))
        window.location.replace(window.location.hash.replace(/^#__msie303:/, '#'));
    </script><![endif]-->
          <link rel="search" href="../../../../../search.html" />
          <link rel="help" href="../../../../../wiki/TracGuide.html" />
          <link rel="alternate" href="pluginfdfc.js?rev=2091071&amp;format=txt" type="text/plain" title="Plain Text" />
          <link rel="alternate" href="../../../../../export/2091071/tinymce-advanced/trunk/mce/anchor/plugin.js" type="text/javascript; charset=utf-8" title="Original Format" />
          <link rel="up" href="plugin.html" />
          <link rel="start" href="../../../../../wiki.html" />
          <link rel="stylesheet" href="../../../../../../s.w.org/style/trac/common/css/trac.css" type="text/css" />
          <link rel="stylesheet" href="../../../../../../s.w.org/style/trac/common/css/code.css" type="text/css" />
          <link rel="stylesheet" href="../../../../../pygments/trac.css" type="text/css" />
          <link rel="stylesheet" href="../../../../../../s.w.org/style/trac/common/css/changeset.css" type="text/css" />
          <link rel="stylesheet" href="../../../../../../s.w.org/style/trac/common/css/diff.css" type="text/css" />
          <link rel="stylesheet" href="../../../../../../s.w.org/style/trac/common/css/browser.css" type="text/css" />
          <link rel="prev" href="plugin59ba.html?rev=2083026" title="Revision 2083026" />
          <link rel="icon" href="../../../../../chrome/common/trac.ico" type="image/x-icon" />
    <style id="trac-noscript" type="text/css">.trac-noscript { display: none !important }</style>
      <link type="application/opensearchdescription+xml" rel="search" href="../../../../../search/opensearch" title="Search WordPress Plugin Repository" />
	
	<script>
		// <![CDATA[
		window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/s.w.org\/wp-includes\/js\/wp-emoji-release.min.js?ver=20160722"}};
		!function(a,b,c){function d(a){var c,d,e,f=b.createElement("canvas"),g=f.getContext&&f.getContext("2d"),h=String.fromCharCode;if(!g||!g.fillText)return!1;switch(g.textBaseline="top",g.font="600 32px Arial",a){case"flag":return g.fillText(h(55356,56806,55356,56826),0,0),f.toDataURL().length>3e3;case"diversity":return g.fillText(h(55356,57221),0,0),c=g.getImageData(16,16,1,1).data,d=c[0]+","+c[1]+","+c[2]+","+c[3],g.fillText(h(55356,57221,55356,57343),0,0),c=g.getImageData(16,16,1,1).data,e=c[0]+","+c[1]+","+c[2]+","+c[3],d!==e;case"simple":return g.fillText(h(55357,56835),0,0),0!==g.getImageData(16,16,1,1).data[0];case"unicode8":return g.fillText(h(55356,57135),0,0),0!==g.getImageData(16,16,1,1).data[0];case"unicode9":return g.fillText(h(55358,56631),0,0),0!==g.getImageData(16,16,1,1).data[0]}return!1}function e(a){var c=b.createElement("script");c.src=a,c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g,h,i;for(i=Array("simple","flag","unicode8","diversity","unicode9"),c.supports={everything:!0,everythingExceptFlag:!0},h=0;h<i.length;h++)c.supports[i[h]]=d(i[h]),c.supports.everything=c.supports.everything&&c.supports[i[h]],"flag"!==i[h]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[i[h]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);
		// ]]>
	</script>
	<style>
		img.emoji {
			display: inline !important;
			border: none !important;
			box-shadow: none !important;
			height: 1em !important;
			width: 1em !important;
			margin: 0 .07em !important;
			vertical-align: -0.1em !important;
			background: none !important;
			padding: 0 !important;
		}
	</style>
	<link href="../../../../../../fonts.googleapis.com/css8bce.css?family=Open+Sans:300italic,400italic,600italic,400,300,600&amp;subset=latin,cyrillic-ext,greek-ext,greek,vietnamese,latin-ext,cyrillic" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="../../../../../../s.w.org/style/wp47cbb.css?70" />
	<!--[if lte IE 8]>
	<style type="text/css">
	@import url("https://s.w.org/style/ie.css?1");
	</style>
	<![endif]-->
	<script type="text/javascript">
		var toggleMenu = function() {
			var menu    = document.getElementById( 'wporg-header-menu' ),
				toggle  = document.getElementById( 'mobile-menu-button' ),
				classes = menu.className,
				toggled = classes.match( ' active' );
			menu.className = toggled ? classes.replace( ' active', '' ) : classes + ' active';
			toggle.setAttribute( 'aria-expanded', ! toggled );
		};
	</script>

	<meta name="viewport" content="width=device-width" />
	<link rel="stylesheet" href="../../../../../../s.w.org/wp-includes/css/dashicons.min0bd5.css?20150710" type="text/css" />
	<link rel="stylesheet" type="text/css" href="../../../../../../s.w.org/style/trac/wp-tracf4b9.css?94" />
	<script type="text/javascript" charset="utf-8" src="../../../../../../s.w.org/style/trac/common/js/jquery.js"></script>
      <script type="text/javascript" charset="utf-8" src="../../../../../../s.w.org/style/trac/common/js/babel.js"></script>
      <script type="text/javascript" charset="utf-8" src="../../../../../../s.w.org/style/trac/common/js/trac.js"></script>
      <script type="text/javascript" charset="utf-8" src="../../../../../../s.w.org/style/trac/common/js/search.js"></script>
      <script type="text/javascript" charset="utf-8" src="../../../../../../s.w.org/style/trac/common/js/blame.js"></script>
    <script type="text/javascript">
      jQuery("#trac-noscript").remove();
      jQuery(document).ready(function($) {
        $(".trac-autofocus").focus();
        $(".trac-target-new").attr("target", "_blank");
        if ($.ui) { /* is jquery-ui added? */
          $(".trac-datepicker:not([readonly])").prop("autocomplete", "off").datepicker();
          $(".trac-datetimepicker:not([readonly])").prop("autocomplete", "off").datetimepicker();
          $("#main").addClass("trac-nodatetimehint");
        }
        $(".trac-disable").disableSubmit(".trac-disable-determinant");
        setTimeout(function() { $(".trac-scroll").scrollToTop() }, 1);
        $(".trac-disable-on-submit").disableOnSubmit();
      });
    </script>
    <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
    <script type="text/javascript" src="../../../../../../s.w.org/style/trac/common/js/folding.js"></script>
    <script type="text/javascript">
      jQuery(document).ready(function($) {
        $(".trac-toggledeleted").show().click(function() {
                  $(this).siblings().find(".trac-deleted").toggle();
                  return false;
        }).click();
        $("#jumploc input").hide();
        $("#jumploc select").change(function () {
          this.parentNode.parentNode.submit();
        });
            enableBlame("https://plugins.trac.wordpress.org/changeset/", "", "tinymce-advanced/trunk/mce/anchor/plugin.html");
          $('#preview table.code').enableCollapsibleColumns($('#preview table.code thead th.content'));
      });
    </script>
  </head>
  <body id="wordpress-org" class="plugins trac wporg-make make-plugins">
	
<div id="wporg-header">
    <div class="wrapper">
        <button id="mobile-menu-button" onclick="toggleMenu();" aria-expanded="false"><span class="screen-reader-text">Toggle Menu</span></button>
        <h1><a href="https://wordpress.org/">WordPress.org</a></h1>
        <div id="head-search">
            <form action="https://wordpress.org/search/do-search.php" method="get">
                <label for="global-search" class="screen-reader-text">Search WordPress.org for:</label>
                <input id="global-search" class="text" name="search" type="text" value="" maxlength="150" placeholder="Search WordPress.org" />
                <button type="submit" class="button"><span class="screen-reader-text">Submit</span></button>
            </form>
        </div>
        <div style="clear:both"></div>
        <ul id="wporg-header-menu">
            <li><a href="https://wordpress.org/showcase/" title="See some of the sites built on WordPress.">Showcase</a></li>
            <li><a href="https://wordpress.org/themes/" title="Find just the right look for your website.">Themes</a></li>
            <li><a href="https://wordpress.org/plugins/" title="Plugins can extend WordPress to do almost anything you can imagine." class="current">Plugins</a>
                <div class="uparrow"></div>
            </li>
            <li><a href="https://wordpress.org/mobile/" title="Take your website on the go!">Mobile</a></li>
            <li><a href="https://wordpress.org/support/" title="Forums, documentation, help.">Support</a>
                <ul class="nav-submenu">
                    <li><a href="https://wordpress.org/support/" title="Support and discussion forums.">Forums</a></li>
                    <li><a href="https://codex.wordpress.org/Main_Page" title="Documentation, tutorials, best practices.">Documentation</a></li>
                </ul>
                <div class="uparrow"></div>
            </li>
            <li><a href="https://make.wordpress.org/" title="Contribute your knowledge.">Get Involved</a>
                <div class="uparrow"></div>
            </li>
            <li><a href="https://wordpress.org/about/" title="About the WordPress Organization, and where we're going.">About</a></li>
            <li><a href="https://wordpress.org/news/" title="Come here for the latest scoop.">Blog</a></li>
            <li><a href="https://wordpress.org/hosting/" title="Find a home for your blog.">Hosting</a></li>
            <li id="download" class="button download-button"><a href="https://wordpress.org/download/" title="Get it. Got it? Good.">Download WordPress</a></li>
        </ul>
        <div style="clear:both"></div>
    </div>
</div>

	
	<div id="headline" class="no-menu">
		<div class="wrapper">
			<h2><a href="http://wordpress.org/plugins/">Plugin Directory</a></h2>
		</div>
	</div>

    <div id="banner">
      <form id="search" action="https://plugins.trac.wordpress.org/search" method="get">
        <div>
          <label for="proj-search">Search:</label>
          <input type="text" id="proj-search" name="q" size="18" value="" />
          <input type="submit" value="Search" />
        </div>
      </form>
      <div id="metanav" class="nav">
    <ul>
      <li class="last first"><a href="https://plugins.trac.wordpress.org/login">Login</a></li>
    </ul>
  </div>
    </div>
    <div id="mainnav" class="nav">
    <ul>
      <li class="first"><a href="https://plugins.trac.wordpress.org/timeline">Timeline</a></li><li><a href="https://plugins.trac.wordpress.org/report">View Tickets</a></li><li class="last active"><a href="https://plugins.trac.wordpress.org/browser">Browse Source</a></li>
    </ul>
  </div>
    <div id="main">
      <div id="ctxtnav" class="nav">
        <h2>Context Navigation</h2>
        <ul>
          <li class="first"><span>&larr; <a class="prev" href="plugin59ba.html?rev=2083026" title="Revision 2083026">Previous Revision</a></span></li><li><a href="plugin.html">Latest Revision</a></li><li><span class="missing">Next Revision &rarr;</span></li><li><a href="plugin3f03.html?rev=2091071" title="View file without annotations">Normal</a></li><li class="last"><a href="../../../../../log/tinymce-advanced/trunk/mce/anchor/plugin3f03.html?rev=2091071">Revision Log</a></li>
        </ul>
        <hr />
      </div>
    <div id="content" class="browser">
        <h1>
          
<a class="pathentry first" href="https://plugins.trac.wordpress.org/browser?rev=2091071&amp;order=name" title="Go to repository root">source:</a>
<a class="pathentry" href="https://plugins.trac.wordpress.org/browser/tinymce-advanced?rev=2091071&amp;order=name" title="View tinymce-advanced">tinymce-advanced</a><span class="pathentry sep">/</span><a class="pathentry" href="https://plugins.trac.wordpress.org/browser/tinymce-advanced/trunk?rev=2091071&amp;order=name" title="View trunk">trunk</a><span class="pathentry sep">/</span><a class="pathentry" href="../../mce5a95.html?rev=2091071&amp;order=name" title="View mce">mce</a><span class="pathentry sep">/</span><a class="pathentry" href="../anchor5a95.html?rev=2091071&amp;order=name" title="View anchor">anchor</a><span class="pathentry sep">/</span><a class="pathentry" href="plugin5a95.html?rev=2091071&amp;order=name" title="View plugin.js">plugin.js</a>
<span class="pathentry sep">@</span>
  <a class="pathentry" href="https://plugins.trac.wordpress.org/changeset/2091071/" title="View changeset 2091071">2091071</a>
<br style="clear: both" />

        </h1>
        <div id="diffrev">
          <form action="https://plugins.trac.wordpress.org/changeset" method="get">
            <div>
              <label title="Show the diff against a specific revision">
                View diff against: <input type="text" name="old" size="6" />
                <input type="hidden" name="old_path" value="tinymce-advanced/trunk/mce/anchor/plugin.html" />
                <input type="hidden" name="new" value="2091071" />
                <input type="hidden" name="new_path" value="tinymce-advanced/trunk/mce/anchor/plugin.html" />
              </label>
            </div>
          </form>
        </div>
        <div id="jumprev">
          <form action="#" method="get">
            <div>
              <label for="rev" title="Hint: clear the field to view latest revision">
                View revision:</label>
              <input type="text" id="rev" name="rev" value="2091071" size="6" />
            </div>
          </form>
        </div>
        <div class="trac-tags">
        </div>
      <table id="info" summary="Revision info">
        <tr>
          <th>
                <a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="View differences">Last change</a>
                  on this file since 2091071 was
                  <a href="https://plugins.trac.wordpress.org/changeset/2091071/" title="View changeset 2091071">2091071</a>,
                  checked in by <span class="trac-author">azaozz</span>, <a class="timeline" href="https://plugins.trac.wordpress.org/timeline?from=2019-05-20T04%3A08%3A53Z&amp;precision=second" title="See timeline at 05/20/2019 04:08:53 AM">3 years ago</a>
          </th>
        </tr>
        <tr>
          <td class="message searchable">
              <p>
TMA: update for WP 5.2.1<br />
</p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <ul class="props">
              <li>
                  Property <strong>svn:eol-style</strong> set to
                  <em><code>LF</code></em>
              </li>
            </ul>
          </td>
        </tr>
        <tr><td colspan="2">
            <strong>File size:</strong>
            <span title="3434 bytes">3.4 KB</span>
          </td></tr>
      </table>
      <div id="preview" class="searchable">
        
  <table class="code"><thead><tr><th class="blame" title="Revision in which the line changed">Rev</th><th class="lineno" title="Line numbers">Line</th><th class="content"> </th></tr></thead><tbody><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L1"><a href="#L1">1</a></th><td><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td></tr><tr><th class="blame r1876961" style="background-color: rgb(231, 136, 159);"><a href="../../../../../changeset/1876961/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.9.6 and TinyMCE 4.7.11.">[1876961]</a></th><th id="L2"><a href="#L2">2</a></th><td><span class="kd">var</span> <span class="nx">anchor</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L3"><a href="#L3">3</a></th><td>    <span class="s1">'use strict'</span><span class="p">;</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L4"><a href="#L4">4</a></th><td></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L5"><a href="#L5">5</a></th><td>    <span class="kd">var</span> <span class="nx">global</span> <span class="o">=</span> <span class="nx">tinymce</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">Tools</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="s1">'tinymce.PluginManager'</span><span class="p">);</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L6"><a href="#L6">6</a></th><td></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L7"><a href="#L7">7</a></th><td>    <span class="kd">var</span> <span class="nx">isValidId</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L8"><a href="#L8">8</a></th><td>      <span class="k">return</span> <span class="sr">/^[A-Za-z][A-Za-z0-9\-:._]*$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">id</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L9"><a href="#L9">9</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L10"><a href="#L10">10</a></th><td>    <span class="kd">var</span> <span class="nx">getId</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">editor</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L11"><a href="#L11">11</a></th><td>      <span class="kd">var</span> <span class="nx">selectedNode</span> <span class="o">=</span> <span class="nx">editor</span><span class="p">.</span><span class="nx">selection</span><span class="p">.</span><span class="nx">getNode</span><span class="p">();</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L12"><a href="#L12">12</a></th><td>      <span class="kd">var</span> <span class="nx">isAnchor</span> <span class="o">=</span> <span class="nx">selectedNode</span><span class="p">.</span><span class="nx">tagName</span> <span class="o">===</span> <span class="s1">'A'</span> <span class="o">&amp;&amp;</span> <span class="nx">editor</span><span class="p">.</span><span class="nx">dom</span><span class="p">.</span><span class="nx">getAttrib</span><span class="p">(</span><span class="nx">selectedNode</span><span class="p">,</span> <span class="s1">'href'</span><span class="p">)</span> <span class="o">===</span> <span class="s1">''</span><span class="p">;</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L13"><a href="#L13">13</a></th><td>      <span class="k">return</span> <span class="nx">isAnchor</span> <span class="o">?</span> <span class="nx">selectedNode</span><span class="p">.</span><span class="nx">id</span> <span class="o">||</span> <span class="nx">selectedNode</span><span class="p">.</span><span class="nx">name</span> <span class="o">:</span> <span class="s1">''</span><span class="p">;</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L14"><a href="#L14">14</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L15"><a href="#L15">15</a></th><td>    <span class="kd">var</span> <span class="nx">insert</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">editor</span><span class="p">,</span> <span class="nx">id</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L16"><a href="#L16">16</a></th><td>      <span class="kd">var</span> <span class="nx">selectedNode</span> <span class="o">=</span> <span class="nx">editor</span><span class="p">.</span><span class="nx">selection</span><span class="p">.</span><span class="nx">getNode</span><span class="p">();</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L17"><a href="#L17">17</a></th><td>      <span class="kd">var</span> <span class="nx">isAnchor</span> <span class="o">=</span> <span class="nx">selectedNode</span><span class="p">.</span><span class="nx">tagName</span> <span class="o">===</span> <span class="s1">'A'</span> <span class="o">&amp;&amp;</span> <span class="nx">editor</span><span class="p">.</span><span class="nx">dom</span><span class="p">.</span><span class="nx">getAttrib</span><span class="p">(</span><span class="nx">selectedNode</span><span class="p">,</span> <span class="s1">'href'</span><span class="p">)</span> <span class="o">===</span> <span class="s1">''</span><span class="p">;</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L18"><a href="#L18">18</a></th><td>      <span class="k">if</span> <span class="p">(</span><span class="nx">isAnchor</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L19"><a href="#L19">19</a></th><td>        <span class="nx">selectedNode</span><span class="p">.</span><span class="nx">removeAttribute</span><span class="p">(</span><span class="s1">'name'</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L20"><a href="#L20">20</a></th><td>        <span class="nx">selectedNode</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">id</span><span class="p">;</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L21"><a href="#L21">21</a></th><td>        <span class="nx">editor</span><span class="p">.</span><span class="nx">undoManager</span><span class="p">.</span><span class="nx">add</span><span class="p">();</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L22"><a href="#L22">22</a></th><td>      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L23"><a href="#L23">23</a></th><td>        <span class="nx">editor</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L24"><a href="#L24">24</a></th><td>        <span class="nx">editor</span><span class="p">.</span><span class="nx">selection</span><span class="p">.</span><span class="nx">collapse</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L25"><a href="#L25">25</a></th><td>        <span class="nx">editor</span><span class="p">.</span><span class="nx">execCommand</span><span class="p">(</span><span class="s1">'mceInsertContent'</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">editor</span><span class="p">.</span><span class="nx">dom</span><span class="p">.</span><span class="nx">createHTML</span><span class="p">(</span><span class="s1">'a'</span><span class="p">,</span> <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="nx">id</span> <span class="p">}));</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L26"><a href="#L26">26</a></th><td>      <span class="p">}</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L27"><a href="#L27">27</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L28"><a href="#L28">28</a></th><td>    <span class="kd">var</span> <span class="nx">Anchor</span> <span class="o">=</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L29"><a href="#L29">29</a></th><td>      <span class="nx">isValidId</span><span class="o">:</span> <span class="nx">isValidId</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L30"><a href="#L30">30</a></th><td>      <span class="nx">getId</span><span class="o">:</span> <span class="nx">getId</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L31"><a href="#L31">31</a></th><td>      <span class="nx">insert</span><span class="o">:</span> <span class="nx">insert</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"></th><th id="L32"><a href="#L32">32</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L33"><a href="#L33">33</a></th><td></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L34"><a href="#L34">34</a></th><td>    <span class="kd">var</span> <span class="nx">insertAnchor</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">editor</span><span class="p">,</span> <span class="nx">newId</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L35"><a href="#L35">35</a></th><td>      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">Anchor</span><span class="p">.</span><span class="nx">isValidId</span><span class="p">(</span><span class="nx">newId</span><span class="p">))</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L36"><a href="#L36">36</a></th><td>        <span class="nx">editor</span><span class="p">.</span><span class="nx">windowManager</span><span class="p">.</span><span class="nx">alert</span><span class="p">(</span><span class="s1">'Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.'</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L37"><a href="#L37">37</a></th><td>        <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L38"><a href="#L38">38</a></th><td>      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L39"><a href="#L39">39</a></th><td>        <span class="nx">Anchor</span><span class="p">.</span><span class="nx">insert</span><span class="p">(</span><span class="nx">editor</span><span class="p">,</span> <span class="nx">newId</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L40"><a href="#L40">40</a></th><td>        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L41"><a href="#L41">41</a></th><td>      <span class="p">}</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L42"><a href="#L42">42</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L43"><a href="#L43">43</a></th><td>    <span class="kd">var</span> <span class="nx">open</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">editor</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L44"><a href="#L44">44</a></th><td>      <span class="kd">var</span> <span class="nx">currentId</span> <span class="o">=</span> <span class="nx">Anchor</span><span class="p">.</span><span class="nx">getId</span><span class="p">(</span><span class="nx">editor</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L45"><a href="#L45">45</a></th><td>      <span class="nx">editor</span><span class="p">.</span><span class="nx">windowManager</span><span class="p">.</span><span class="nx">open</span><span class="p">({</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L46"><a href="#L46">46</a></th><td>        <span class="nx">title</span><span class="o">:</span> <span class="s1">'Anchor'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L47"><a href="#L47">47</a></th><td>        <span class="nx">body</span><span class="o">:</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L48"><a href="#L48">48</a></th><td>          <span class="nx">type</span><span class="o">:</span> <span class="s1">'textbox'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L49"><a href="#L49">49</a></th><td>          <span class="nx">name</span><span class="o">:</span> <span class="s1">'id'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L50"><a href="#L50">50</a></th><td>          <span class="nx">size</span><span class="o">:</span> <span class="mi">40</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L51"><a href="#L51">51</a></th><td>          <span class="nx">label</span><span class="o">:</span> <span class="s1">'Id'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L52"><a href="#L52">52</a></th><td>          <span class="nx">value</span><span class="o">:</span> <span class="nx">currentId</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L53"><a href="#L53">53</a></th><td>        <span class="p">},</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L54"><a href="#L54">54</a></th><td>        <span class="nx">onsubmit</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L55"><a href="#L55">55</a></th><td>          <span class="kd">var</span> <span class="nx">newId</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L56"><a href="#L56">56</a></th><td>          <span class="k">if</span> <span class="p">(</span><span class="nx">insertAnchor</span><span class="p">(</span><span class="nx">editor</span><span class="p">,</span> <span class="nx">newId</span><span class="p">))</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L57"><a href="#L57">57</a></th><td>            <span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"></th><th id="L58"><a href="#L58">58</a></th><td>          <span class="p">}</span></td></tr><tr><th class="blame r2083026" style="background-color: rgb(254, 136, 136);"><a href="../../../../../changeset/2083026/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA 5.2">[2083026]</a></th><th id="L59"><a href="#L59">59</a></th><td>        <span class="p">}</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L60"><a href="#L60">60</a></th><td>      <span class="p">});</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L61"><a href="#L61">61</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"></th><th id="L62"><a href="#L62">62</a></th><td>    <span class="kd">var</span> <span class="nx">Dialog</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">open</span><span class="o">:</span> <span class="nx">open</span> <span class="p">};</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L63"><a href="#L63">63</a></th><td></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L64"><a href="#L64">64</a></th><td>    <span class="kd">var</span> <span class="nx">register</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">editor</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L65"><a href="#L65">65</a></th><td>      <span class="nx">editor</span><span class="p">.</span><span class="nx">addCommand</span><span class="p">(</span><span class="s1">'mceAnchor'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L66"><a href="#L66">66</a></th><td>        <span class="nx">Dialog</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">editor</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L67"><a href="#L67">67</a></th><td>      <span class="p">});</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L68"><a href="#L68">68</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"></th><th id="L69"><a href="#L69">69</a></th><td>    <span class="kd">var</span> <span class="nx">Commands</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">register</span><span class="o">:</span> <span class="nx">register</span> <span class="p">};</span></td></tr><tr><th class="blame r894068" style="background-color: rgb(136, 136, 255);"><a href="../../../../../changeset/894068/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Version 4.0">[894068]</a></th><th id="L70"><a href="#L70">70</a></th><td></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L71"><a href="#L71">71</a></th><td>    <span class="kd">var</span> <span class="nx">isAnchorNode</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L72"><a href="#L72">72</a></th><td>      <span class="k">return</span> <span class="o">!</span><span class="nx">node</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'href'</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'id'</span><span class="p">)</span> <span class="o">||</span> <span class="nx">node</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'name'</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">node</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L73"><a href="#L73">73</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L74"><a href="#L74">74</a></th><td>    <span class="kd">var</span> <span class="nx">setContentEditable</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">state</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L75"><a href="#L75">75</a></th><td>      <span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">nodes</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L76"><a href="#L76">76</a></th><td>        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L77"><a href="#L77">77</a></th><td>          <span class="k">if</span> <span class="p">(</span><span class="nx">isAnchorNode</span><span class="p">(</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L78"><a href="#L78">78</a></th><td>            <span class="nx">nodes</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'contenteditable'</span><span class="p">,</span> <span class="nx">state</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"></th><th id="L79"><a href="#L79">79</a></th><td>          <span class="p">}</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L80"><a href="#L80">80</a></th><td>        <span class="p">}</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L81"><a href="#L81">81</a></th><td>      <span class="p">};</span></td></tr><tr><th class="blame r1876961" style="background-color: rgb(231, 136, 159);"><a href="../../../../../changeset/1876961/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.9.6 and TinyMCE 4.7.11.">[1876961]</a></th><th id="L82"><a href="#L82">82</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L83"><a href="#L83">83</a></th><td>    <span class="kd">var</span> <span class="nx">setup</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">editor</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L84"><a href="#L84">84</a></th><td>      <span class="nx">editor</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">'PreInit'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L85"><a href="#L85">85</a></th><td>        <span class="nx">editor</span><span class="p">.</span><span class="nx">parser</span><span class="p">.</span><span class="nx">addNodeFilter</span><span class="p">(</span><span class="s1">'a'</span><span class="p">,</span> <span class="nx">setContentEditable</span><span class="p">(</span><span class="s1">'false'</span><span class="p">));</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L86"><a href="#L86">86</a></th><td>        <span class="nx">editor</span><span class="p">.</span><span class="nx">serializer</span><span class="p">.</span><span class="nx">addNodeFilter</span><span class="p">(</span><span class="s1">'a'</span><span class="p">,</span> <span class="nx">setContentEditable</span><span class="p">(</span><span class="kc">null</span><span class="p">));</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L87"><a href="#L87">87</a></th><td>      <span class="p">});</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L88"><a href="#L88">88</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"></th><th id="L89"><a href="#L89">89</a></th><td>    <span class="kd">var</span> <span class="nx">FilterContent</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">setup</span><span class="o">:</span> <span class="nx">setup</span> <span class="p">};</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L90"><a href="#L90">90</a></th><td></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L91"><a href="#L91">91</a></th><td>    <span class="kd">var</span> <span class="nx">register$1</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">editor</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L92"><a href="#L92">92</a></th><td>      <span class="nx">editor</span><span class="p">.</span><span class="nx">addButton</span><span class="p">(</span><span class="s1">'anchor'</span><span class="p">,</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L93"><a href="#L93">93</a></th><td>        <span class="nx">icon</span><span class="o">:</span> <span class="s1">'anchor'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L94"><a href="#L94">94</a></th><td>        <span class="nx">tooltip</span><span class="o">:</span> <span class="s1">'Anchor'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L95"><a href="#L95">95</a></th><td>        <span class="nx">cmd</span><span class="o">:</span> <span class="s1">'mceAnchor'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L96"><a href="#L96">96</a></th><td>        <span class="nx">stateSelector</span><span class="o">:</span> <span class="s1">'a:not([href])'</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L97"><a href="#L97">97</a></th><td>      <span class="p">});</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L98"><a href="#L98">98</a></th><td>      <span class="nx">editor</span><span class="p">.</span><span class="nx">addMenuItem</span><span class="p">(</span><span class="s1">'anchor'</span><span class="p">,</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L99"><a href="#L99">99</a></th><td>        <span class="nx">icon</span><span class="o">:</span> <span class="s1">'anchor'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L100"><a href="#L100">100</a></th><td>        <span class="nx">text</span><span class="o">:</span> <span class="s1">'Anchor'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L101"><a href="#L101">101</a></th><td>        <span class="nx">context</span><span class="o">:</span> <span class="s1">'insert'</span><span class="p">,</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L102"><a href="#L102">102</a></th><td>        <span class="nx">cmd</span><span class="o">:</span> <span class="s1">'mceAnchor'</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L103"><a href="#L103">103</a></th><td>      <span class="p">});</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L104"><a href="#L104">104</a></th><td>    <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L105"><a href="#L105">105</a></th><td>    <span class="kd">var</span> <span class="nx">Buttons</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">register</span><span class="o">:</span> <span class="nx">register$1</span> <span class="p">};</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L106"><a href="#L106">106</a></th><td></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L107"><a href="#L107">107</a></th><td>    <span class="nx">global</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">'anchor'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">editor</span><span class="p">)</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L108"><a href="#L108">108</a></th><td>      <span class="nx">FilterContent</span><span class="p">.</span><span class="nx">setup</span><span class="p">(</span><span class="nx">editor</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"></th><th id="L109"><a href="#L109">109</a></th><td>      <span class="nx">Commands</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="nx">editor</span><span class="p">);</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"></th><th id="L110"><a href="#L110">110</a></th><td>      <span class="nx">Buttons</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="nx">editor</span><span class="p">);</span></td></tr><tr><th class="blame r1876961" style="background-color: rgb(231, 136, 159);"><a href="../../../../../changeset/1876961/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.9.6 and TinyMCE 4.7.11.">[1876961]</a></th><th id="L111"><a href="#L111">111</a></th><td>    <span class="p">});</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136); border-bottom: none;"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L112"><a href="#L112">112</a></th><td>    <span class="kd">function</span> <span class="nx">Plugin</span> <span class="p">()</span> <span class="p">{</span></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"></th><th id="L113"><a href="#L113">113</a></th><td>    <span class="p">}</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L114"><a href="#L114">114</a></th><td></td></tr><tr><th class="blame r2091071" style="background-color: rgb(255, 136, 136);"><a href="../../../../../changeset/2091071/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: TMA: update for WP 5.2.1">[2091071]</a></th><th id="L115"><a href="#L115">115</a></th><td>    <span class="k">return</span> <span class="nx">Plugin</span><span class="p">;</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L116"><a href="#L116">116</a></th><td></td></tr><tr><th class="blame r1876961" style="background-color: rgb(231, 136, 159);"><a href="../../../../../changeset/1876961/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.9.6 and TinyMCE 4.7.11.">[1876961]</a></th><th id="L117"><a href="#L117">117</a></th><td><span class="p">}());</span></td></tr><tr><th class="blame r1673659" style="background-color: rgb(209, 136, 181);"><a href="../../../../../changeset/1673659/tinymce-advanced/trunk/mce/anchor/plugin.html" title="azaozz: Update for WordPress 4.8.">[1673659]</a></th><th id="L118"><a href="#L118">118</a></th><td><span class="p">})();</span></td></tr></tbody></table>

      </div>
      <div id="anydiff">
        <form action="https://plugins.trac.wordpress.org/diff" method="get">
          <div style="display:none;"><input type="text" name="sfp_email" value="" /><input type="hidden" name="sfph_mail" value="" /></div><div class="buttons">
            <input type="hidden" name="new_path" value="../../../../../tinymce-advanced/trunk/mce/anchor/plugin.html" />
            <input type="hidden" name="old_path" value="../../../../../tinymce-advanced/trunk/mce/anchor/plugin.html" />
            <input type="hidden" name="new_rev" value="2091071" />
            <input type="hidden" name="old_rev" value="2091071" />
            <input type="submit" value="View changes..." title="Select paths and revs for Diff" />
          </div>
        </form>
      </div>
      <div id="help"><strong>Note:</strong> See <a href="https://plugins.trac.wordpress.org/wiki/TracBrowser">TracBrowser</a>
        for help on using the repository browser.</div>
    </div>
    <div id="altlinks">
    <a class="preferences-link" href="https://plugins.trac.wordpress.org/prefs">Trac UI Preferences</a>
      <h3>Download in other formats:</h3>
      <ul>
        <li class="first">
          <a rel="nofollow" href="pluginfdfc.js?rev=2091071&amp;format=txt">Plain Text</a>
        </li><li class="last">
          <a rel="nofollow" href="../../../../../export/2091071/tinymce-advanced/trunk/mce/anchor/plugin.js">Original Format</a>
        </li>
      </ul>
</div>
    </div>
	
<div id="wporg-footer">
	<div class="wrapper">
		<ul>
			<li><a href="https://wordpress.org/about/" title="An introduction to the WordPress project">About</a></li>
			<li><a href="https://wordpress.org/news/" title="News and Updates">Blog</a></li>
			<li><a href="https://wordpress.org/hosting/" title="Recommended web hosting providers">Hosting</a></li>
			<li><a href="https://wordpressfoundation.org/donate/" title="Donate to the WordPress Foundation">Donate</a></li>
		</ul>
		<ul>
			<li><a href="https://wordpress.org/support/" title="Forums, documentation, and other resources">Support</a></li>
			<li><a href="https://developer.wordpress.org/" title="Resources for WordPress developers">Developers</a></li>
			<li><a href="https://make.wordpress.org/" title="Give back to WordPress through code, support, translation and more">Get Involved</a></li>
			<li><a href="https://learn.wordpress.org/" title="Workshops and training materials">Learn</a></li>
		</ul>
		<ul>
			<li><a href="https://wordpress.org/showcase/" title="Some of the best WordPress sites on the Web">Showcase</a></li>
			<li><a href="https://wordpress.org/plugins/" title="Add extra functionality to WordPress">Plugins</a></li>
			<li><a href="https://wordpress.org/themes/" title="Make your WordPress pretty">Themes</a></li>
			<li><a href="https://wordpress.org/ideas/" title="Share your ideas for improving WordPress">Ideas</a></li>
		</ul>
		<ul>
			<li><a href="https://central.wordcamp.org/" title="Find a WordPress event near you">WordCamp</a></li>
			<li><a href="https://wordpress.tv/" title="Videos, tutorials, and WordCamp sessions">WordPress.TV</a></li>
			<li><a href="https://buddypress.org/" title="A set of plugins to transform your WordPress into a social network">BuddyPress</a></li>
			<li><a href="https://bbpress.org/" title="Fast, slick forums built on WordPress">bbPress</a></li>
		</ul>
		<ul>
			<li><a href="https://wordpress.com/?ref=wporg-footer" title="Hassle-free WordPress hosting">WordPress.com</a></li>
			<li><a href="https://ma.tt/" title="Co-founder of WordPress, an example of what WordPress can do">Matt</a></li>
			<li><a href="https://wordpress.org/about/privacy/" title="WordPress.org Privacy Policy">Privacy</a></li>
			<li><a href="https://wordpress.org/about/license/" title="WordPress is open source software">License / GPLv2</a></li>
		</ul>
	</div>
	<p class="cip cip-image">Code is Poetry</p>
</div>
<script type="text/javascript">
  var _qevents = _qevents || [];
  (function() {
   var elem = document.createElement('script');
   elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge")
               + ".quantserve.com/quant.js";
   elem.async = true;
   elem.type = "text/javascript";
   var scpt = document.getElementsByTagName('script')[0];
   scpt.parentNode.insertBefore(elem, scpt);
  })();
</script>
<script type="text/javascript">_qevents.push( { qacct:"p-18-mFEk4J448M"} );</script>
<noscript><img src="../../../../../../pixel.quantserve.com/pixel/p-18-mFEk4J448M.gif" style="display: none;" border="0" height="1" width="1" alt="" /></noscript>

	<script>
	var wpTracCurrentUser = "anonymous";
	</script>
	<script src="../../../../../../s.w.org/style/trac/jquery.caret.min6789.js?ver=2015-02-01"></script>
	<script src="../../../../../../s.w.org/style/trac/jquery.atwho.minf269.js?ver=1.0.1"></script>
	<script src="../../../../../../s.w.org/style/trac/wp-tracf4b9.js?94"></script>
</body>

<!-- Mirrored from plugins.trac.wordpress.org/browser/tinymce-advanced/trunk/mce/anchor/plugin.js?annotate=blame&rev=2091071 by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 10 Feb 2022 17:23:01 GMT -->
</html>