(function(){
  var S=[
    ["Lead","Leads sit in the CRM with no clear owner, so follow-up depends on who notices them.","A named owner and a set reply time for every new lead, tracked in the CRM.","Hours from new lead to first reply"],
    ["Signed deal","Sales knows what was promised, and onboarding finds out a week later.","A standard handoff note and an automatic onboarding task, built into your CRM.","Days from signed deal to kickoff"],
    ["Onboarding","Every customer gets a slightly different set of steps, and nobody can see how long each one takes.","One checklist per customer type, tracked in one place, with an owner for each step.","Days from signed deal to live customer"],
    ["Live","Support gets the first requests before anyone has written down how the customer is set up.","A setup summary created at go-live and attached to the customer record.","First response time on support"],
    ["Invoiced","Plan changes and extras agreed in the CRM never reach billing.","A sync between CRM and billing, with a regular check for mismatches.","Invoices corrected after sending"],
    ["Paid","Failed payments sit unnoticed until month end.","Automatic alerts and a set follow-up sequence for failed payments.","Days to collect payment"],
    ["Renewal","Renewal dates live in one person’s head or in a spreadsheet.","A renewal calendar in the CRM with reminders ahead of each date.","Renewal rate"]
  ];
  var cur=2,mode="b",svg=document.getElementById("pipe"),st=document.getElementById("stages"),det=document.getElementById("det");
  S.forEach(function(s,i){var b=document.createElement("button");b.type="button";b.textContent=s[0];b.addEventListener("click",function(){cur=i;draw()});st.appendChild(b)});
  document.querySelectorAll("[data-mode]").forEach(function(b){b.addEventListener("click",function(){mode=b.getAttribute("data-mode");draw()})});
  function draw(){
    var h='<line class="ln" x1="60" y1="95" x2="840" y2="95"/>',i,k;
    for(i=0;i<7;i++){h+='<circle class="nd'+(i===cur?" "+mode:"")+'" cx="'+(60+130*i)+'" cy="95" r="'+(i===cur?18:13)+'"/>'}
    if(mode==="b"){for(k=0;k<5;k++){h+='<circle class="db" cx="'+(60+130*cur)+'" cy="'+(52-k*11)+'" r="5"/>'}}
    else{for(k=0;k<6;k++){h+='<circle class="da" cx="'+(125+130*k)+'" cy="95" r="5"/>'}}
    svg.innerHTML=h;
    st.querySelectorAll("button").forEach(function(b,j){b.setAttribute("aria-pressed",j===cur?"true":"false")});
    document.querySelectorAll("[data-mode]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-mode")===mode?"true":"false")});
    var s=S[cur];
    det.innerHTML="<div><b>The bottleneck</b><p></p></div><div><b>How we resolve it</b><p></p></div><div><b>The number we track</b><p></p></div>";
    var p=det.querySelectorAll("p");p[0].textContent=s[1];p[1].textContent=s[2];p[2].textContent=s[3];
  }
  draw();
})();
