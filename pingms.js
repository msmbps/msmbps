//
//
// JavaScript code of HTTP ping.
// The full project is at https://github.com/pingms/pingms
//
//
ping_start=0;  // The start time of HTTP ping.
ping_img=null; // The "IMG" object of HTTP ping.
ping_ok=false; // Whether HTTP ping is done(initial and final).
//
//
// Reset all variables of HTTP ping.
// Required for starting new HTTP ping.
function ping_reset()
{
    ping_start=0;
    ping_ok=false;
    if(ping_img!=null)
    {
        ping_img.onerror=null;
        ping_img.onload=null;
        ping_img.remove();
        ping_img=null;
    }
}
//
//
// Callback function when HTTP ping is done(initial or final).
// Parameter: time(ms) of HTTP ping.
function ping_callback(ping_time)
{
    if(first_try)
    {
        first_try=false;
        ping(urls[index].innerHTML);
    }
    else
    {
        results[index].innerHTML=ping_time+"ms";
        ping_ok=true;
    }
}
//
//
// This function is called when HTTP ping is done.
// This function is called by "IMG" event.
function ping_img_done()
{
    var ping_end=new Date().getTime();
    var ping_time=ping_end-ping_start;
    ping_callback(ping_time);
}
//
//
// HTTP ping.
// Parameter: URL such as "http://fra-de-ping.vultr.com/".
function ping(url)
{
    ping_reset();
    ping_img=document.createElement('img');
    ping_img.onerror=ping_img_done;
    ping_img.style.display="none";
    ping_img.src=url+Math.random()+"?a="+Math.random();
    ping_start=new Date().getTime();
    document.body.appendChild(ping_img);
}
index=0;                // Current index of URL array.
first_try=false;        // Whether it's the first try(for caching DNS)
items=null;             // Array of objects of the "item" class.
urls=null;              // Array of objects of the "url" class.
results=null;           // Array of objects of the "result" class.
sections=[14,22,34,46]; // Index of the last "item" of each cloud provider.
//
//
// Highlight #1 and #2 in results of each cloud provider.
function best()
{
    //alert("best");
    var range_end=index;
    var i=sections.indexOf(range_end);
    if(i==0)
    {
        var range_start=0;
    }
    else
    {
        var range_start=sections[i-1]+1;
    }
    var number_one_index=0;
    var number_one_value=10000;
    for(var i=range_start;i<=range_end;i++)
    {
        var ms_text=results[i].innerHTML;
        if(ms_text.indexOf("ms")!=-1)
        {
            var ms_value=parseInt(ms_text.substring(0,ms_text.indexOf("ms")));
            if(ms_value<number_one_value)
            {
                number_one_value=ms_value;
                number_one_index=i;
            }
        }
    }
    items[number_one_index].style.backgroundColor="BlueViolet";
    var number_two_index=0;
    var number_two_value=10000;
    for(var i=range_start;i<=range_end;i++)
    {
        var ms_text=results[i].innerHTML;
        if(ms_text.indexOf("ms")!=-1)
        {
            if(i!=number_one_index)
            {
                var ms_value=parseInt(ms_text.substring(0,ms_text.indexOf("ms")));
                if(ms_value<number_two_value)
                {
                    number_two_value=ms_value;
                    number_two_index=i;
                }
            }
        }
    }
    items[number_two_index].style.backgroundColor="DeepSkyBlue";
}
//
//
// Run HTTP ping for the next "item".
function next()
{
    if(!ping_ok)
    {
        setTimeout(next,25);
        return;
    }
    if(sections.includes(index))
    {
        best();
    }
    index++;
    if(index>urls.length-1)
    {
        return;
    }
    first_try=true;
    ping(urls[index].innerHTML);
    setTimeout(next,25);
}
//
//
// This function is called by "body onload".
function main()
{
    items=document.getElementsByClassName("item");
    urls=document.getElementsByClassName("url");
    results=document.getElementsByClassName("result");
    index=0;
    first_try=true;
    ping(urls[index].innerHTML);
    setTimeout(next,25);
}
//
//
// END OF FILE
// The full project is at https://github.com/pingms/pingms
//
//