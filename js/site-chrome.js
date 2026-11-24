/* Shared header + footer. Edit this file once to update every page. */
(function () {
	function getRootPrefix() {
		var path = (window.location.pathname || "").replace(/\\/g, "/");
		if (/\/(article|our-services|tester)(\/|$)/i.test(path)) {
			return "../";
		}
		return "";
	}

	function currentPage() {
		var path = (window.location.pathname || "").replace(/\\/g, "/");
		var file = decodeURIComponent(path.split("/").pop() || "").toLowerCase();
		if (!file || file.indexOf(".") === -1) {
			file = "index.html";
		}
		return {
			file: file,
			inArticle: /\/article\//i.test(path),
			inServices: /\/our-services\//i.test(path)
		};
	}

	function activeKey(page) {
		if (page.file === "index.html") return "home";
		if (page.inServices || page.file === "ourservices.html") return "services";
		if (page.file === "about.html") return "team";
		if (page.inArticle || page.file === "share.html" || page.file === "book.html") return "share";
		if (page.file === "interndetail2.html") return "interndetail2";
		if (page.file === "cooperate.html") return "cooperate";
		if (page.inArticle || page.file === "cooperate.html" || page.file === "charitable.html") return "cooperate";
		if (page.file === "contact.html" || page.file === "interndetail.html") return "contact";
		return "";
	}

	function headerHTML(root) {
		return (
			'<div class="container">' +
			'<div class="header-left">' +
			'<div class="w3layouts-logo">' +
			"<h2>" +
			'<a href="' + root + 'index.html" class="speech-therapy">' +
			'<img src="' + root + 'images/icon.png">' +
			'<div class="speech-therapy-text">' +
			"<div>諾道言語治療</div>" +
			"<div>PROWAY SPEECH THERAPY</div>" +
			"</div>" +
			"</a>" +
			"</h2>" +
			"</div>" +
			"</div>" +
			'<div class="header-right">' +
			'<div class="w3-header-bottom">' +
			'<div class="top-nav">' +
			'<nav class="navbar navbar-default">' +
			'<div class="navbar-header">' +
			'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
			'<span class="sr-only">Toggle navigation</span>' +
			'<span class="icon-bar"></span>' +
			'<span class="icon-bar"></span>' +
			'<span class="icon-bar"></span>' +
			"</button>" +
			"</div>" +
			'<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
			'<ul class="nav navbar-nav">' +
			'<li><a data-nav="home" href="' + root + 'index.html">主頁</a></li>' +
			'<li class="">' +
			'<a data-nav="services" href="' + root + 'ourservices.html" class="dropdown-toggle hvr-bounce-to-bottom" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">諾道服務<span class="caret"></span></a>' +
			'<ul class="dropdown-menu">' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'our-services/prevention.html">預防</a></li>' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'our-services/intervention.html">治療</a></li>' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'our-services/enhancement.html">提升</a></li>' +
			"</ul>" +
			"</li>" +
			'<li class="">' +
			'<a data-nav="team" href="#" class="dropdown-toggle hvr-bounce-to-bottom" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">諾道團隊<span class="caret"></span></a>' +
			'<ul class="dropdown-menu">' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'about.html#therapist">言語治療師</a></li>' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'about.html#worker">註冊社工</a></li>' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'about.html#psychologist">教育心理學家</a></li>' +
			"</ul>" +
			"</li>" +
			'<li class="">' +
			'<a data-nav="share" href="' + root + 'share.html" class="dropdown-toggle hvr-bounce-to-bottom" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">諾道分享<span class="caret"></span></a>' +
			'<ul class="dropdown-menu">' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'share.html">文章分享</a></li>' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'book.html">繪本分享</a></li>' +
			"</ul>" +
			"</li>" +
			'<li><a data-nav="interndetail2" href="' + root + 'interndetail2.html">實習生計劃</a></li>' +
			'<li class="">' +
			'<a data-nav="cooperate" href="' + root + 'cooperate.html" class="dropdown-toggle hvr-bounce-to-bottom" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">合作機構/學校<span class="caret"></span></a>' +
			'<ul class="dropdown-menu">' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'cooperate.html">服務提供</a></li>' +
			'<li><a class="hvr-bounce-to-bottom" href="' + root + 'charitable.html">慈善活動</a></li>' +
			"</ul>" +
			"</li>" +
			'<li><a data-nav="contact" href="' + root + 'contact.html">聯絡諾道</a></li>' +
			"</ul>" +
			'<div class="clearfix"> </div>' +
			"</div>" +
			"</nav>" +
			"</div>" +
			'<div class="agileinfo-social-grids">' +
			"<ul>" +
			'<li><a href="https://wa.me/85265328821"><img src="' + root + 'images/whatsapp2.png"></a></li>' +
			"&nbsp;&nbsp;" +
			'<li><a href="mailto:info@prowayst.com"><img src="' + root + 'images/mail.png"></a></li>' +
			"&nbsp;&nbsp;" +
			'<li><a href="https://www.facebook.com/prowayspeechtherapy/"><img src="' + root + 'images/facebook.png"></a></li>' +
			"&nbsp;&nbsp;" +
			'<li><a href="https://www.instagram.com/prowayspeechtherapy/"><img src="' + root + 'images/instagram.png"></a></li>' +
			"&nbsp;&nbsp;" +
			'<li><a class="qr-link" href="' + root + 'images/wechat_QR.jpg" title="微信 WeChat ID: prowayst"><img src="' + root + 'images/wechat_QR.jpg" alt="WeChat QR"></a></li>' +
			"&nbsp;&nbsp;" +
			'<li><a class="qr-link" href="' + root + 'images/redbook_QR.jpg" title="小紅書號：95848162943"><img src="' + root + 'images/redbook_QR.jpg" alt="小紅書 QR"></a></li>' +
			"</ul>" +
			"</div>" +
			'<div class="clearfix"> </div>' +
			"</div>" +
			"</div>" +
			'<div class="clearfix"> </div>' +
			"</div>"
		);
	}

	function footerHTML() {
		return (
			'<div class="container">' +
			'<div class="agile-footer-grids">' +
			'<div class="col-md-4 agile-footer-grid">' +
			"<h4>諾道言語治療</h4>" +
			"<span>地址：沙田石門安耀街5號W LUXE 21樓N3及23樓S15</span><br>" +
			"<span>電話：6532 8821</span><br>" +
			"<span>電郵：info@prowayst.com</span>" +
			"</div>" +
			'<div class="col-md-4 agile-footer-grid">' +
			"<span><b>星期二至日</b> 09:00 - 18:00</span><br>" +
			"<span><b>星期一及公眾假期</b> 休息</span><br>" +
			"<span><b>敬請預約</b></span>" +
			"</div>" +
			"</div>" +
			'<div class="clearfix"> </div>' +
			"</div>"
		);
	}

	function copyrightHTML() {
		return (
			'<div class="container">' +
			"<p>Copyright &copy; 2026.PROWAY SPEECH THERAPY All rights reserved.</p>" +
			"</div>"
		);
	}

	function markActive(headerEl) {
		var key = activeKey(currentPage());
		if (!key) return;
		var links = headerEl.querySelectorAll("[data-nav]");
		for (var i = 0; i < links.length; i++) {
			if (links[i].getAttribute("data-nav") === key) {
				links[i].className = (links[i].className + " active").replace(/^\s+/, "");
			}
		}
	}

	function renderHeader() {
		var el = document.querySelector("[data-site-header]");
		if (!el || el.getAttribute("data-rendered") === "1") return;
		el.setAttribute("data-rendered", "1");
		el.innerHTML = headerHTML(getRootPrefix());
		markActive(el);
	}

	function renderFooter() {
		var footer = document.querySelector("[data-site-footer]");
		if (footer && footer.getAttribute("data-rendered") !== "1") {
			footer.setAttribute("data-rendered", "1");
			footer.innerHTML = footerHTML();
		}
		var copy = document.querySelector("[data-site-copyright]");
		if (copy && copy.getAttribute("data-rendered") !== "1") {
			copy.setAttribute("data-rendered", "1");
			copy.innerHTML = copyrightHTML();
		}
	}

	function init() {
		renderHeader();
		renderFooter();
	}

	init();
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	}
})();
