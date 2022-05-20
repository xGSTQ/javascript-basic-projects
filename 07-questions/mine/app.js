//using selectors inside the element
// traversing the dom


const   articleToggleBtnEl = document.querySelectorAll('.faq--expand-link'),
        faqArticleEl = document.querySelectorAll('.faq--article-reveal');


articleToggleBtnEl.forEach(function (btn) {
    btn.addEventListener("click", function (thisButton) {

        // Navigate to faq--article-reveal node from Btn
        let checkStyle = thisButton.currentTarget.parentNode.nextElementSibling

        // Close any open articles first
        faqArticleEl.forEach(function (thisArticle) {
            if (thisArticle !== checkStyle) {
                thisArticle.classList.remove("article-fadeIn");
            }
        });

        // Toggle any articles clicked
        checkStyle.classList.toggle('article-fadeIn');

    })
})