//Wizard-scrolling-to v.1.0.0 (07.15.2016)
;(function ( $ )
	{
		$.fn.wizScrollingTo = function(options)
		{
			var scrollActivator = this;
			var settings = $.extend(
				{
					scrollTarget: false,
					marginTop: 0,
					scrollSpeed: 500,
					fadeSpeed: 400,
					fadeAnim: false,
					callbackFun: function()
					{
					},
				},options);
			if( settings.deinitialize === 'true' )
			{
				return
			}
			var scrollTarget = settings.scrollTarget;
			var scrollSpeed = settings.scrollSpeed;
			var fadeSpeed = settings.fadeSpeed;
			var marginTop = settings.marginTop;
			var fadeAnim = settings.fadeAnim;

			if(fadeAnim)
			{
				animFade();
			}else
			{
				jqFade();
			};


			/*=====================HELPER FUNCTIONS=====================*/
			function scrolling()
			{
				if(scrollTarget)
				{
					var scrollToMargin = $(scrollTarget).offset().top;

				}else
				{
					var scrollToMargin = marginTop;
				}
				$('html, body').animate(
					{

						scrollTop:scrollToMargin


					}, scrollSpeed);
				return false;
			}

			function animFade()
			{
				if ( $(document).scrollTop() > 0 )
				{
					scrollActivator.removeClass('bounceOut');
					scrollActivator.addClass('bounceIn');

				} else
				{
					scrollActivator.removeClass('bounceIn');
					scrollActivator.addClass('bounceOut');

				}
				return false;
			}

			function jqFade()
			{
				if ( $(document).scrollTop() > 0 )
				{
					scrollActivator.fadeIn(fadeSpeed);
				} else
				{
					scrollActivator.fadeOut(fadeSpeed);
				}
				return false;
			}


			scrollActivator.click(function()
				{
					scrolling();
				});

			$(window).scroll(function()
				{
					if(fadeAnim)
					{
						animFade();
					}else
					{
						jqFade();
					}
				});

			return this;
		};
	}( jQuery ));