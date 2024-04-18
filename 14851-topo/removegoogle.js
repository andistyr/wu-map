
// A $( document ).ready() block.
$( document ).ready(function() {
	
	removegoogle();
	
});

async function removegoogle() {
  
  for(var i=0; i<40; i++)
  {
  await sleep(100);
  $('div').each(function (index, value) { 
		if(typeof $(this).attr('style') !== 'undefined' && $(this).attr('style').includes("font-weight: 500;"))
		{
			$(this).hide();
		}
	  
	});
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


