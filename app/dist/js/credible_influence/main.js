/**
 * Created by Juan Infante on 5/11/2018
 */

var Main = function () {


    var storyAdvantageCollapse = false;
    var storyAdvantageSelected = null;
    var servicesArray = [

        {
            "title" : "Social Audits & Data Driven Strategy",
            "copy" : "Trying to get a handle on your social performance and what consumers are saying about your brand? Credible Influence analysis of your social universe is industry leading, fast and cost effective. Using our proprietary Buzz Radar listening and analysis platform, we can provide a true picture of the health of your brand and where you stand in your industry. Providing clear actionable recommendations for how to boost performance and ROI. We’ll create a report, recommendations and sit down to walk you through it all within 7 days.",
        },
        {
            "title" : "Competitor Analysis",
            "copy" : "Want to know where you stand with your competitors? Where you have an advantage? And what are they doing that you could learn from?  We execute comprehensive analysis of 5 nominated competitors alongside their products and social channels. Starting with a share of voice between you and your competitors, we will then map out their whole social strategy and tactics. We’ll figure out what’s working for them and what's not from channel analysis, post performance and influencer campaigns. Finally we’ll psychometrically analyse their audiences and even benchmark their social ROI. The result is deep, comprehensive, meaningful insights and recommendations that will give you a critical competitive advantage.",
        },
        {
            "title" : "Content Optimisation",
            "copy" : "Trying to understand what content is engaging your audience and why? Our deep analysis of all your content goes way beyond standard analytical performance analysis. Using natural language and visual AI, we create a detailed map of what content engages your audience, what doesn’t and most importantly why. We also map your existing and targeted audiences and provide in depth recommendations on how to modify your content and publishing tactics for the best possible results.",
        },
        {
            "title" : "Partners Selection & Influencer Identification",
            "copy" : "Partnerships can be some of the biggest investments a brand can make. We help clients identify and validate partnership decisions using data. Our team conduct deep social analysis on sporting and cultural properties to help ensure it’s a good overall fit. We monitor and compare audience fit, fan engagement, growth and sentiment performance for a potential partner. We then use machine learning to make predictions on growth and future performance based on historical data to identify and verify marketing opportunities for our clients.",
        },
        {
            "title" : "Brand Reputation Monitoring & Management",
            "copy" : "Threats to a brand’s reputation can come unexpectedly at any time from any direction. They can start small and grow or they can come out of nowhere. We have developed best in class natural language and visual sentiment measurement and have provided reputation war rooms for Nike, Nestle, Pret a Manger and the Obama Administration. Our sentiment reports let you understand how your audience views you, how they react to your posts, what motivates that sentiment and who is driving it. Alongside this we provide reputation and crisis support and recommendations providing a steady hand to help you navigate choppy waters.",
        },
        {
            "title" : "Deep Audience Analysis",
            "copy" : "Understanding who your current audience is should be more than just an overview of basic demographics and interests. Our Audience Analyser uses watson AI to create psychometric profiles of every follower, influencer and motioner of a brand across social. Creating true understanding of your audience and a clear guide on how to engage and inspire them.",
        },
        {
            "title" : "Influencer Verification & Fraud Detection",
            "copy" : "Finding the right influencers can be a real challenge. With up to 25% of influencers engaging in some level of fraud, validating that they aren’t fluffing their engagement and reach with bots and fake followers is even tougher. Using our proprietary platform and years of experience, we can help brands find the right influencers to chime with their message on a deep level. We help by providing advice on understand the best way to engage in a partnership and also using our AI influencer fraud detection we can tell if their reach and engagement is real and your investment is warranted and safe.",
        },
        {
            "title" : "Tactical Social Content Advice & Consultation",
            "copy" : "<p>We’ve assembled a leading team of strategists, tacticians, analysts and AI specialists that can advise you on anything Content, Social, Audience or AI related. Here are some of the questions we’ve been helping clients answer this month:</p><ul><li>“What is 9:16 vertical video and why should I be using it?”</li><li>“What new Instagram new features are a good fit for us to try testing?”</li><li>“How will recent algorithmic changes on Facebook and Instagram affect my strategy?”</li><li>“With our organic reach in decline across all social channels, is all engagement worth paying for?”</li><li>“Which of IGTV and YouTube’s new aspect ratios are going to be the most effective for my brand?”</li></ul>",
        },
    ];




    var trackGAEvent = function(hitType, category, action, label, value) {

        console.log ("%c -> GA Event ---> ", "background:#ff0000;", hitType + " , " + category + " , " + action + " , " + label);

        ga('send', {
          hitType: hitType,
          eventCategory: category,
          eventAction: action,
          eventLabel: label,
        });

    };


    

    var addStoryAdvantage = function(){
    
        var copy;
        $('.story_advantage').find('button').click(function() {
            
            var btn = $(this);
            var type = btn.data('type');
        
            if (type != storyAdvantageSelected){
                if (storyAdvantageCollapse){
                    $('.story_advantage_copy').collapse('hide');                
                    storyAdvantageCollapse = false; 
                    setTimeout(function(){
                        showRelevantCopy(type);
                    },1000);
                }else{
                    showRelevantCopy(type);
                }
                storyAdvantageSelected = type;
            }else{
                $('.story_advantage_copy').collapse('hide');                
                storyAdvantageCollapse = false;
                storyAdvantageSelected = null;
            }

            
        });

        function showRelevantCopy(type){

            switch (type){
                case 'story':
                    trackGAEvent('event','Our Story Button','clicked','true');
                    $('.dynamic-copy').find('.our_story').show();
                    $('.dynamic-copy').find('.our_advantages').hide();
                break;
                case 'advantage':
                    trackGAEvent('event','Our Advantage Button','clicked','true');
                    $('.dynamic-copy').find('.our_story').hide();
                    $('.dynamic-copy').find('.our_advantages').show();
                break;
            }

            $('.story_advantage_copy').collapse('show');
            storyAdvantageCollapse = true;

            // $('html, body').animate({
            //     scrollTop: $(".story_advantage_copy").offset().top
            // }, 1000);
 
        }

    };



    var setScrollTop = function() {

        $('#backtop,.navbar-brand').click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);

        });

    };



    var setServices = function() {

        $('.services').find('.icon-text').mouseover(function(){
            var iframe = $(this).find('iframe').contents();
            iframe.find('.rolloverfill').css({ fill: "#ffffff" });
            iframe.find('.rolloverstroke').css({ stroke: "#ffffff" });
        });

        $('.services').find('.icon-text').mouseout(function(){
            var iframe = $(this).find('iframe').contents();
            iframe.find('.rolloverfill').css({ fill: "#21C6CA" });
            iframe.find('.rolloverstroke').css({ stroke: "#21C6CA" });
        });

        $('.services').find('.icon-text').click(function(){
            //console.log($(this));
            var id = $(this).data('id');
            var imgIcon = $(this).find('img');
            trackGAEvent('event','Service Thumb Button','clicked',servicesArray[id].title);
            bootbox.dialog({
                    title: servicesArray[id].title,
                    message: '<img src="'+imgIcon.attr('src')+'" class="img-fluid tinyicon" />' + servicesArray[id].copy + '<img src="'+imgIcon.attr('src')+'" class="img-fluid watermark" />',
                    size: 'medium',
                    closeButton: false,
                    buttons: {
                            cancel: {
                                label: "Close",
                                className: "btn-sm btn-secondary"
                            }
                        }
                    }
            );
        });

    };



    var setUpContactForm = function() {

        $("#contact-form").validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                company: "required",
            },
            messages: {
                name: "Please enter your name.",
                company: "Please enter your company.",
                email: "Please enter a valid email address.",
            }
        });

        $('.sendContactBtn').click(function(){
            if ($("#contact-form").valid()){
                $('button.sendContactBtn').prop("disabled", true);
                console.log("The Contact form is valid!!!");
                makeAPICallSendEmail();
            }else{
                console.log("The Contact form is NOT valid!!!");
            }
        });

    };


    var makeAPICallSendEmail = function() {

        var dataToSend = {
            name : $('input[name=name]').val(),
            email : $('input[name=email]').val(),
            company : $('input[name=company]').val(),
        };

        console.log("We are making the API call to => http://insights.buzzradar.com/api/contact-form");
        console.log("data =>",dataToSend);
        console.log("method => GET");

        $.ajax({
            url: "http://insights.buzzradar.com/api/contact-form",
            type: 'GET',
            data: dataToSend,
            success: function(data){
                $('button.sendContactBtn').removeAttr("disabled");
                console.log("Success Sending Email: ", data);
                displaySuccessMessage("Congratulations the email is on its way!", "success");
                trackGAEvent('event','Contact Form','submitted','success');
            }
        });

    };


    var displaySuccessMessage = function(message, type) {

        if (type == "success") {
            //resetInputs();
            //$('.user-alerts').html('<div class="alert alert-success">'+message+'</div>')
            $('#contact-form-holder').html('<img src="dist/images/thankyou.jpg" class="img-fluid"/>')
        }else{
            $('.user-alerts').html('<div class="alert alert-danger">'+message+'</div>')
        }

    };

    var resetInputs = function() {

        $('input[name=name]').val('');
        $('input[name=email]').val('');
        $('input[name=company]').val('');

    };


    var setBannerCallToAction = function() {

        $('.learn-more-btn').click(function(){
            storyAdvantageCollapse = false;
            storyAdvantageSelected = null;
            $('#our-story-btn').trigger('click');
            trackGAEvent('event','Learn More Button','clicked','true');

            $('body').animate({
                scrollTop: $('.story_advantage_copy').offset().top - 50
            }, 1000);
        });

    };


    var setBookDemo = function() {

        $('.btn-book-demo').click(function(e){
            e.preventDefault();
            Calendly.showPopupWidget('https://calendly.com/buzzradar/meeting-with-patrick-1');
            return false;
        });

    };


    

    return {
        init: function () {
            setServices();
        	addStoryAdvantage();
            setScrollTop();
            setUpContactForm();
            setBannerCallToAction();
            setBookDemo();
        }
    };
}();

Main.init();