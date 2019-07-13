// For full API documentation, including code examples, visit http://wix.to/94BuAAs

$w.onReady(function () {

	default_pagination();

	$w("#slideshow1").onChange((event) => {
		switch ($w("#slideshow1").currentIndex) {
		case 0:
			$w('#active1').show();
			$w('#active2').hide();
			$w('#active3').hide();
			$w('#active4').hide();
			$w('#active5').hide();
			$w('#active6').hide();
			$w('#dot1').hide();
			$w('#dot2').show();
			$w('#dot3').show();
			$w('#dot4').show();
			$w('#dot5').show();
			$w('#dot6').show();
			break;
		case 1:
			$w('#active1').hide();
			$w('#active2').show();
			$w('#active3').hide();
			$w('#active4').hide();
			$w('#active5').hide();
			$w('#active6').hide();
			$w('#dot1').show();
			$w('#dot2').hide();
			$w('#dot3').show();
			$w('#dot4').show();
			$w('#dot5').show();
			$w('#dot6').show();
			break;
		case 2:
			$w('#active1').hide();
			$w('#active2').hide();
			$w('#active3').show();
			$w('#active4').hide();
			$w('#active5').hide();
			$w('#active6').hide();
			$w('#dot1').show();
			$w('#dot2').show();
			$w('#dot3').hide();
			$w('#dot4').show();
			$w('#dot5').show();
			$w('#dot6').show();
			break;
		case 3:
			$w('#active1').hide();
			$w('#active2').hide();
			$w('#active3').hide();
			$w('#active4').show();
			$w('#active5').hide();
			$w('#active6').hide();
			$w('#dot1').show();
			$w('#dot2').show();
			$w('#dot3').show();
			$w('#dot4').hide();
			$w('#dot5').show();
			$w('#dot6').show();
			break;
		case 4:
			$w('#active1').hide();
			$w('#active2').hide();
			$w('#active3').hide();
			$w('#active4').hide();
			$w('#active5').show();
			$w('#active6').hide();
			$w('#dot1').show();
			$w('#dot2').show();
			$w('#dot3').show();
			$w('#dot4').show();
			$w('#dot5').hide();
			$w('#dot6').show();
			break;
		case 5:
			$w('#active1').hide();
			$w('#active2').hide();
			$w('#active3').hide();
			$w('#active4').hide();
			$w('#active5').hide();
			$w('#active6').show();
			$w('#dot1').show();
			$w('#dot2').show();
			$w('#dot3').show();
			$w('#dot4').show();
			$w('#dot5').show();
			$w('#dot6').hide();
			break;
		}
	});

});

function default_pagination() {
	$w('#active1').show();
	$w('#active2').hide();
	$w('#active3').hide();
	$w('#active4').hide();
	$w('#active5').hide();
	$w('#active6').hide();
	$w('#dot1').hide();
	$w('#dot2').show();
	$w('#dot3').show();
	$w('#dot4').show();
	$w('#dot5').show();
	$w('#dot6').show();
}

export function dot1_click(event) {
	$w("#slideshow1").changeSlide(0);
}

export function dot2_click(event) {
	$w("#slideshow1").changeSlide(1);
}

export function dot3_click(event) {
	$w("#slideshow1").changeSlide(2);
}

export function dot4_click(event) {
	$w("#slideshow1").changeSlide(3);
}

export function dot5_click(event) {
	$w("#slideshow1").changeSlide(4);
}

export function dot6_click(event) {
	$w("#slideshow1").changeSlide(5);
}
