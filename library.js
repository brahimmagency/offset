const NICHES = [
  {name:"Coffee shop",category:"commerce",directions:[
    ["Quiet Japanese","QUIET / JAPANESE / CEREMONIAL","preview-quiet","A slow, precise coffee world. Paper textures, tiny typography, calm photography and generous breathing room.",["quiet","editorial","tactile","minimal"]],
    ["Warm neighborhood","WARM / LOCAL / HANDMADE","preview-warm","A familiar neighbourhood coffee shop with warm materials, handwritten cues and an easy rhythm.",["warm","local","human","food"]],
    ["Gallery café","ART / GALLERY / OBJECT","preview-paper","Treat the café like a small cultural space. Menu as exhibition, products as objects, space as the main story.",["art-led","gallery","editorial","premium"]],
    ["Night coffee bar","LATE / DARK / CULTURE","preview-dark","A darker, after-hours coffee identity with poster energy, oversized type and a little edge.",["late-night","culture","raw","dark"]]
  ]},
  {name:"Restaurant",category:"commerce",directions:[
    ["Modern dining","DINING / EDITORIAL / PRECISE","preview-paper","A composed restaurant site built around dishes, pacing and strong editorial photography.",["editorial","food","premium","precise"]],
    ["Old-world dining","OLD WORLD / WINE / HERITAGE","preview-sand","A more historic, print-inspired direction using archive cues, serif type and restrained ornament.",["heritage","serif","archive","luxury"]],
    ["Open kitchen","RAW / TACTILE / HUMAN","preview-warm","Material, food and the people behind it. Imperfect details are part of the experience.",["tactile","warm","chef-led","human"]],
    ["Late-night counter","LOUD / URBAN / AFTER DARK","preview-red","A punchier food world built around speed, night energy and graphic poster language.",["bold","night","urban","poster"]]
  ]},
  {name:"Bakery",category:"commerce",directions:[
    ["Morning paper","SOFT / EDITORIAL / FRESH","preview-blush","A light, literary bakery identity with soft paper tones and elegant type.",["soft","editorial","food","morning"]],
    ["Craft workshop","HANDMADE / MATERIAL / WORK","preview-clay","Celebrate the process: flour, hands, heat, wood and the people making the bread.",["craft","process","human","warm"]],
    ["City bread","URBAN / BOLD / DAILY","preview-oxide","A graphic, everyday bakery identity that feels more like a favourite newspaper than a catalogue.",["urban","bold","daily","graphic"]],
    ["Tiny luxury","MINIMAL / PREMIUM / QUIET","preview-white","A sharp, reduced bakery direction for a small premium brand with obsessive details.",["minimal","luxury","quiet","product"]]
  ]},
  {name:"Hotel",category:"commerce",directions:[
    ["Quiet retreat","QUIET / NATURE / SLOW","preview-moss","A calm hospitality experience where location, room details and atmosphere do the selling.",["quiet","nature","hospitality","cinematic"]],
    ["Design hotel","DESIGN / ARCHIVE / OBJECT","preview-sand","A magazine-like hotel identity built around architecture, rooms and curated objects.",["design","editorial","architecture","premium"]],
    ["Night hotel","NIGHT / CINEMA / CITY","preview-ink","A moody, filmic hotel world for a place that lives after dark.",["night","cinematic","urban","luxury"]],
    ["Boutique home","WARM / PERSONAL / HUMAN","preview-warm","A small-hotel direction that feels like a beautiful private house rather than a chain.",["warm","personal","boutique","human"]]
  ]},
  {name:"Fashion label",category:"commerce",directions:[
    ["Runway archive","EDITORIAL / FASHION / IMAGE","preview-blush","Large image crops, elegant type and an editorial pace that feels closer to a lookbook.",["fashion","editorial","luxury","image-led"]],
    ["Anti-fashion","RAW / CULTURAL / IMPERFECT","preview-dark","A less polished fashion world built from posters, type and attitude.",["raw","culture","youth","bold"]],
    ["Quiet luxury","MINIMAL / MATERIAL / RESTRAINED","preview-white","An almost silent interface where fabric, silhouette and detail carry the experience.",["minimal","luxury","quiet","material"]],
    ["Studio uniform","PRODUCT / SYSTEM / TYPOGRAPHIC","preview-grid","A precise, system-first direction for a modern label with strong product discipline.",["system","product","fashion","sharp"]]
  ]},
  {name:"Jewelry",category:"commerce",directions:[
    ["Object study","OBJECT / GALLERY / PRECISION","preview-metal","The jewelry becomes sculpture, with measured typography and gallery pacing.",["object","gallery","luxury","minimal"]],
    ["Heritage atelier","HERITAGE / WARM / COLLECTIBLE","preview-gold","An old-world atelier feel with archive codes and a collectible object mentality.",["heritage","atelier","luxury","warm"]],
    ["Soft portrait","SOFT / HUMAN / INTIMATE","preview-blush","A close, intimate direction where hands, skin and stories matter as much as the pieces.",["soft","portrait","human","editorial"]],
    ["High contrast","GRAPHIC / SHARP / MODERN","preview-ink","A stronger fashion-led jewelry direction with black, white and controlled tension.",["graphic","modern","fashion","contrast"]]
  ]},
  {name:"Beauty",category:"commerce",directions:[
    ["Soft laboratory","CLEAN / TACTILE / SCIENCE","preview-frost","Clinical precision with a tactile, human layer instead of a generic medical look.",["clean","science","beauty","trust"]],
    ["High fashion beauty","FASHION / EDITORIAL / IMAGE","preview-blush","Beauty as a visual culture object, with campaign rhythm and art direction.",["fashion","editorial","image","luxury"]],
    ["Earth / ritual","EARTH / RITUAL / SLOW","preview-olive","Natural materials, quiet language and an unhurried sense of care.",["natural","ritual","warm","wellness"]],
    ["Pop beauty","PLAYFUL / GRAPHIC / YOUTH","preview-coral","A more energetic cosmetic world with oversized type and graphic surprises.",["playful","youth","graphic","bold"]]
  ]},
  {name:"Real estate",category:"commerce",directions:[
    ["Private residence","ARCHIVE / PREMIUM / QUIET","preview-sand","A restrained property identity where space, plans and photography feel considered.",["premium","quiet","property","editorial"]],
    ["Brutalist property","CONCRETE / BOLD / ARCHITECTURAL","preview-concrete","A more architectural system with hard geometry and monumental typography.",["architecture","brutalist","bold","minimal"]],
    ["City broker","URBAN / INFORMATIVE / FAST","preview-blue","A clearer, sharper real-estate interface for high-volume listings without looking generic.",["urban","data","sharp","service"]],
    ["Interior-led homes","MATERIAL / LIFESTYLE / HUMAN","preview-paper","Sell the feeling of living there through objects, textures and editorial storytelling.",["lifestyle","interior","human","premium"]]
  ]},
  {name:"Furniture",category:"commerce",directions:[
    ["Object archive","OBJECT / CATALOGUE / QUIET","preview-metal","A product-first museum-like approach for furniture and design objects.",["object","design","catalogue","minimal"]],
    ["Craft furniture","CRAFT / MATERIAL / MAKER","preview-clay","Lead with making, joinery, texture and the hands behind the pieces.",["craft","maker","tactile","warm"]],
    ["Mid-century modern","MODERN / ARCHIVE / CULTURE","preview-sand","A refined design-history direction with editorial references and strong silhouettes.",["archive","design","editorial","culture"]],
    ["Playful home","COLOUR / FORM / BOLD","preview-lime","A more expressive furniture identity built around shape, colour blocks and movement.",["playful","bold","interior","form"]]
  ]},
  {name:"Music / artist",category:"culture",directions:[
    ["Raw poster","RAW / GIG POSTER / CULTURE","preview-dark","Photocopy energy, loud type and a world that feels physically made.",["raw","music","culture","poster"]],
    ["Quiet musician","INTIMATE / EDITORIAL / HUMAN","preview-paper","A slower artist profile where lyrics, images and live moments have room to breathe.",["intimate","editorial","music","human"]],
    ["Electronic","SYSTEM / NIGHT / DIGITAL","preview-ink","A colder visual system with grids, signals, codes and late-night energy.",["electronic","night","system","digital"]],
    ["Pop artist","GRAPHIC / ICONIC / PLAYFUL","preview-coral","A highly ownable world with strong colour, oversized type and campaign-ready blocks.",["pop","graphic","bold","campaign"]]
  ]},
  {name:"Record label",category:"culture",directions:[
    ["Underground label","RAW / CULTURAL / PHYSICAL","preview-dark","Poster walls, sleeves, stamps and late-night language for a label with a point of view.",["underground","raw","music","culture"]],
    ["Art label","GALLERY / CURATED / EDITORIAL","preview-paper","A calmer record-label world that treats releases as collectible cultural objects.",["gallery","editorial","curated","music"]],
    ["Club imprint","LOUD / NIGHT / MOVEMENT","preview-red","A high-pressure visual system for releases, events and nightlife.",["club","night","bold","music"]],
    ["Ambient label","QUIET / CINEMATIC / ATMOSPHERIC","preview-moss","Minimal type and deep breathing room for music that lives in the margins.",["ambient","quiet","cinematic","music"]]
  ]},
  {name:"Photography",category:"people",directions:[
    ["Contact sheet","ARCHIVE / IMAGE / HUMAN","preview-photo","Turn the portfolio into a working archive. Images first, metadata second.",["archive","image-led","editorial","human"]],
    ["Fashion photographer","FASHION / CAMPAIGN / IMAGE","preview-blush","A sharper editorial portfolio with campaign pacing and large image moments.",["fashion","editorial","portfolio","image"]],
    ["Documentary","FIELD NOTE / QUIET / REAL","preview-olive","Photographs feel found, observed and lived in rather than staged.",["documentary","human","quiet","culture"]],
    ["Conceptual","ART / TYPE / EXPERIMENTAL","preview-violet","A gallery-first direction that gives the photographer a visual system of their own.",["art","experimental","gallery","bold"]]
  ]},
  {name:"Film / director",category:"culture",directions:[
    ["Film archive","FRAME / SEQUENCE / EDITORIAL","preview-blackpaper","Treat the body of work like a curated archive of frames, credits and notes.",["film","archive","editorial","cinema"]],
    ["Commercial director","CAMPAIGN / IMAGE / SHARP","preview-white","A polished reel experience with stronger proof, case studies and quick scanning.",["commercial","portfolio","sharp","campaign"]],
    ["Indie cinema","RAW / POSTER / CULTURE","preview-red","Film posters, notes and screenings become the design language.",["indie","poster","culture","film"]],
    ["Experimental film","ABSTRACT / ART / ATMOSPHERE","preview-violet","Less about explaining, more about creating a world around the work.",["experimental","art","cinematic","culture"]]
  ]},
  {name:"Architecture",category:"service",directions:[
    ["Quiet monograph","QUIET / PRECISION / LIGHT","preview-concrete","A measured architectural portfolio where space and proportion do the talking.",["architecture","quiet","precision","editorial"]],
    ["Brutalist studio","CONCRETE / TYPE / MASS","preview-dark","Monumental type and hard geometry for an architecture practice with a stronger edge.",["brutalist","bold","architecture","graphic"]],
    ["Editorial practice","ESSAY / ARCHIVE / CULTURE","preview-paper","Projects are framed through writing, research and visual references.",["editorial","research","culture","architecture"]],
    ["Future architecture","SYSTEM / TECHNICAL / DIGITAL","preview-blue","A more technical direction for studios working with computational or experimental methods.",["technical","digital","system","future"]]
  ]},
  {name:"Interior studio",category:"service",directions:[
    ["Material diary","MATERIAL / TACTILE / QUIET","preview-clay","Textures, samples and spaces become a material journal rather than a standard project grid.",["material","interiors","tactile","editorial"]],
    ["Luxury interiors","LUXURY / IMAGE / RESTRAINED","preview-sand","Elegant, image-led and spacious, with a magazine-like sense of pacing.",["luxury","interiors","editorial","quiet"]],
    ["Bold interiors","COLOUR / FORM / CULTURE","preview-coral","For studios that use colour, art and unexpected objects as part of their signature.",["bold","interiors","culture","colour"]],
    ["Modernist","GRID / PRECISION / FORM","preview-grid","Strict geometry and restrained type for a more architectural interior identity.",["modernist","grid","precision","design"]]
  ]},
  {name:"Creative agency",category:"service",directions:[
    ["Cultural studio","CULTURE / EDITORIAL / ODD","preview-violet","A studio site that feels like a publication or cultural object, not a capability deck.",["culture","creative","editorial","odd"]],
    ["Sharp consultancy","STRATEGY / TYPE / PRECISION","preview-white","Clear, confident and direct, with enough character to stay memorable.",["strategy","consulting","sharp","professional"]],
    ["Experimental lab","RAW / PLAYFUL / SYSTEM","preview-lime","A flexible graphic system for agencies with lots of disciplines and a strong visual voice.",["experimental","graphic","system","creative"]],
    ["Small practice","HUMAN / PERSONAL / CRAFT","preview-paper","Make a small studio feel intentional, close and unmistakably human.",["human","independent","craft","creative"]]
  ]},
  {name:"Law / professional",category:"service",directions:[
    ["Quiet authority","AUTHORITY / EDITORIAL / TRUST","preview-white","A professional presence that feels credible without looking like every other firm.",["trust","authority","editorial","professional"]],
    ["Heritage office","HERITAGE / ARCHIVE / SERIF","preview-sand","Use history, cases, people and institutional language as part of the identity.",["heritage","archive","law","professional"]],
    ["Modern counsel","MODERN / CLEAN / PRECISE","preview-blue","Sharper information architecture for practices that want clarity without visual noise.",["modern","professional","clarity","service"]],
    ["Human practice","PEOPLE / STORY / WARM","preview-warm","Put the people, conversations and values behind the practice closer to the surface.",["human","story","trust","professional"]]
  ]},
  {name:"Consulting",category:"service",directions:[
    ["Editorial strategy","EDITORIAL / INTELLIGENT / CALM","preview-paper","A thinking-led consultancy site built around ideas, writing and point of view.",["editorial","strategy","ideas","quiet"]],
    ["Sharp systems","SYSTEM / DATA / CLEAR","preview-grid","Structured, direct and highly scannable for complex offers and case studies.",["system","data","strategy","clarity"]],
    ["Human advisory","WARM / PEOPLE / TRUST","preview-warm","Make the consultancy feel closer to the actual people doing the work.",["human","trust","advisory","warm"]],
    ["Bold challenger","BOLD / CULTURAL / CONTRARIAN","preview-red","A more opinionated direction for firms that lead with a distinctive perspective.",["bold","strategy","culture","opinion"]]
  ]},
  {name:"Fitness studio",category:"service",directions:[
    ["Club culture","SPORT / CULTURE / BOLD","preview-yellow","Make the gym feel like a club with a scene, not a utility.",["sport","culture","bold","community"]],
    ["Performance lab","TECHNICAL / PRECISE / DATA","preview-blue","A technical training world centred on method, progress and measurement.",["performance","technical","data","fitness"]],
    ["Quiet movement","MINIMAL / WELLNESS / CALM","preview-frost","A slower wellness direction for pilates, yoga and movement studios.",["wellness","quiet","movement","minimal"]],
    ["Street training","RAW / URBAN / ENERGY","preview-dark","Hard typography, poster energy and a little grit for a more street-level identity.",["urban","raw","sport","energy"]]
  ]},
  {name:"Wellness / spa",category:"service",directions:[
    ["Quiet ritual","QUIET / CEREMONY / SLOW","preview-olive","A soft, grounded system built around ritual, touch and a slower pace.",["quiet","ritual","wellness","natural"]],
    ["Modern clinic","CLEAN / TRUST / PRECISION","preview-frost","More architectural and precise, balancing wellness with professional confidence.",["clean","trust","modern","wellness"]],
    ["Boutique retreat","NATURE / CINEMA / ESCAPE","preview-moss","Sell the feeling of being somewhere else through atmosphere and place.",["retreat","nature","cinematic","hospitality"]],
    ["Beauty ritual","SOFT / FASHION / PERSONAL","preview-clay","A tactile direction for beauty and wellness brands with an intimate human layer.",["soft","beauty","ritual","personal"]]
  ]},
  {name:"Dentist / clinic",category:"service",directions:[
    ["Human care","CARE / PEOPLE / CALM","preview-frost","Trust first, but with warmth and a human tone that does not look like a hospital template.",["care","trust","human","calm"]],
    ["Modern medical","PRECISION / SYSTEM / CLEAN","preview-blue","Clear structure, strong information design and a clean clinical language.",["medical","precision","system","clean"]],
    ["Boutique health","EDITORIAL / PREMIUM / QUIET","preview-white","A more elevated clinic presence for practices that feel design-led.",["premium","health","editorial","quiet"]],
    ["Family practice","WARM / LOCAL / FRIENDLY","preview-warm","Friendly, approachable and easy to navigate without looking childish.",["family","warm","local","care"]]
  ]},
  {name:"SaaS / product",category:"service",directions:[
    ["Editorial product","EDITORIAL / PRODUCT / HUMAN","preview-paper","Explain the product through narrative and strong hierarchy rather than floating dashboard clichés.",["product","editorial","saas","human"]],
    ["Technical system","SYSTEM / SHARP / INFORMATION","preview-blue","A precise product world for infrastructure, APIs, tools and technical audiences.",["technical","system","saas","sharp"]],
    ["Cultural tech","CULTURE / ODD / GRAPHIC","preview-violet","For products with a community or a point of view, not just a feature list.",["culture","startup","graphic","odd"]],
    ["Quiet utility","QUIET / MINIMAL / FUNCTIONAL","preview-white","Remove everything unnecessary and let the product story breathe.",["minimal","utility","product","quiet"]]
  ]},
  {name:"Startup",category:"service",directions:[
    ["Founder-led","PEOPLE / STORY / DIRECT","preview-warm","Make the people and belief system behind the company visible.",["founder","story","human","startup"]],
    ["Research lab","RESEARCH / SYSTEM / SERIOUS","preview-grid","A measured system for technical, scientific or deep-tech businesses.",["research","technical","system","startup"]],
    ["Challenger brand","BOLD / GRAPHIC / CULTURAL","preview-red","Build memorability first, then explain the product.",["bold","brand","culture","startup"]],
    ["Quiet premium","PREMIUM / RESTRAINED / MODERN","preview-sand","A more mature product world for teams that sell trust and expertise.",["premium","modern","startup","trust"]]
  ]},
  {name:"E-commerce",category:"commerce",directions:[
    ["Object gallery","OBJECT / PRODUCT / CURATED","preview-metal","Make the shop feel like a collection of objects, not a generic storefront.",["commerce","product","curated","object"]],
    ["Editorial shop","MAGAZINE / PRODUCT / STORY","preview-paper","Product pages feel like articles, collections feel like issues.",["editorial","commerce","story","product"]],
    ["Street commerce","BOLD / CULTURE / YOUTH","preview-dark","A more energetic retail world for fashion, accessories or culture brands.",["street","youth","commerce","bold"]],
    ["Quiet store","MINIMAL / PREMIUM / CALM","preview-white","A reduced product system with strong imagery and almost no visual clutter.",["minimal","premium","commerce","quiet"]]
  ]},
  {name:"Tattoo studio",category:"culture",directions:[
    ["Flash wall","RAW / POSTER / PHYSICAL","preview-dark","Turn flash sheets, symbols and studio notes into the visual system.",["tattoo","raw","poster","culture"]],
    ["Fine line","QUIET / ART / PRECISION","preview-paper","A gallery-like direction for fine-line and highly considered work.",["minimal","art","precision","tattoo"]],
    ["Underground","NIGHT / CULTURE / BOLD","preview-red","A darker studio identity with poster energy and a strong point of view.",["night","underground","bold","tattoo"]],
    ["Artist journal","PERSONAL / PROCESS / HUMAN","preview-photo","Show the artist, sketches, notes and process alongside finished work.",["personal","process","human","tattoo"]]
  ]},
  {name:"Florist",category:"commerce",directions:[
    ["Botanical archive","BOTANICAL / EDITORIAL / QUIET","preview-olive","A plant-library feeling with specimen notes and elegant pacing.",["botanical","archive","quiet","floral"]],
    ["Soft romance","ROMANTIC / IMAGE / WARM","preview-blush","Image-rich, soft and emotionally led for weddings and gift orders.",["romantic","soft","flowers","image"]],
    ["Market stall","LOCAL / HANDMADE / PLAYFUL","preview-warm","A friendly neighbourhood flower shop with hand-made character.",["local","handmade","warm","playful"]],
    ["Sculptural floral","ART / OBJECT / MODERN","preview-metal","Treat arrangements as art objects, with strong shapes and gallery language.",["art","modern","object","floral"]]
  ]},
  {name:"Wedding",category:"people",directions:[
    ["Paper invitation","PAPER / SERIF / ROMANTIC","preview-paper","A digital invitation world with print-like typography and keepsake details.",["wedding","paper","serif","romantic"]],
    ["Editorial couple","FASHION / PHOTO / MODERN","preview-blush","More fashion-magazine than traditional wedding website.",["editorial","fashion","photo","wedding"]],
    ["Garden dinner","NATURE / DINING / WARM","preview-olive","A softer, place-led identity for outdoor weddings and destination events.",["garden","nature","warm","wedding"]],
    ["Party night","NIGHT / MUSIC / PLAYFUL","preview-dark","For weddings that feel like a night out rather than a formal ceremony.",["party","night","music","wedding"]]
  ]},
  {name:"Event / festival",category:"culture",directions:[
    ["Poster system","POSTER / GRAPHIC / CULTURE","preview-coral","A bold visual system designed to work across schedules, line-ups and socials.",["poster","festival","graphic","culture"]],
    ["Art biennale","CURATED / GALLERY / QUIET","preview-paper","An editorial event identity that makes the programme feel like a publication.",["gallery","art","curated","editorial"]],
    ["Club weekender","NIGHT / LOUD / ENERGY","preview-dark","Fast, graphic and high contrast for nightlife and music-led events.",["night","club","energy","music"]],
    ["Community fair","LOCAL / FRIENDLY / HUMAN","preview-warm","Accessible, hand-made and welcoming for community events and markets.",["local","community","human","warm"]]
  ]},
  {name:"Writer / author",category:"people",directions:[
    ["Literary journal","LITERARY / SERIF / QUIET","preview-blackpaper","Make the words the visual object. Long-form reading with a strong print sensibility.",["literary","writer","serif","editorial"]],
    ["Essayist","IDEAS / EDITORIAL / DIRECT","preview-white","A clean, essay-led system for a writer with a strong public voice.",["essay","ideas","editorial","writer"]],
    ["Poet","INTIMATE / EXPERIMENTAL / SOFT","preview-blush","More expressive typography and pacing for poetry, fragments and visual text.",["poetry","experimental","soft","writer"]],
    ["Creator archive","PERSONAL / ARCHIVE / HUMAN","preview-photo","A broader personal site for writing, talks, work and things made over time.",["personal","archive","creator","human"]]
  ]},
  {name:"Personal portfolio",category:"people",directions:[
    ["Work diary","PROCESS / HUMAN / PERSONAL","preview-photo","Show work in progress, notes and the person behind the output.",["portfolio","process","human","personal"]],
    ["Fashion portfolio","EDITORIAL / IMAGE / SHARP","preview-blush","A strong art-directed portfolio for stylists, designers and image makers.",["portfolio","fashion","editorial","image"]],
    ["Developer portfolio","SYSTEM / TECHNICAL / CLEAN","preview-blue","A technical portfolio where projects, systems and thinking lead.",["developer","technical","system","portfolio"]],
    ["Artist book","ART / OBJECT / EXPERIMENTAL","preview-violet","Treat the portfolio as an artwork in itself.",["artist","gallery","experimental","portfolio"]]
  ]},
  {name:"Coach / freelancer",category:"people",directions:[
    ["Personal authority","PEOPLE / TRUST / EDITORIAL","preview-white","A sharp personal brand that puts expertise, proof and personality together.",["coach","freelancer","trust","personal"]],
    ["Warm guide","WARM / HUMAN / APPROACHABLE","preview-warm","A more conversational service world for coaches, mentors and independent consultants.",["warm","human","coach","service"]],
    ["Opinion-led","BOLD / DIRECT / CULTURAL","preview-red","Lead with a strong belief system and a visual identity to match.",["opinion","bold","personal","culture"]],
    ["Quiet specialist","QUIET / PREMIUM / PRECISE","preview-sand","A restrained, high-trust direction for experts selling attention and expertise.",["premium","quiet","expert","service"]]
  ]},
  {name:"School / education",category:"service",directions:[
    ["Modern academy","CLEAR / HUMAN / MODERN","preview-blue","Strong information architecture with a more modern visual identity.",["education","modern","clear","service"]],
    ["Cultural school","CULTURE / EDITORIAL / HUMAN","preview-paper","Treat the school as a community of ideas, people and projects.",["culture","education","editorial","community"]],
    ["Playful learning","PLAYFUL / GRAPHIC / YOUTH","preview-lime","A brighter identity for younger audiences without falling into cartoon clichés.",["playful","education","youth","graphic"]],
    ["Research institute","RESEARCH / ARCHIVE / SERIOUS","preview-blackpaper","A more academic direction for institutes, labs and research organisations.",["research","academic","archive","serious"]]
  ]},
  {name:"Automotive",category:"commerce",directions:[
    ["Garage culture","RAW / MECHANICAL / CULTURE","preview-dark","Grease, metal, workshop language and a more human car culture.",["automotive","garage","raw","culture"]],
    ["Luxury marque","LUXURY / CINEMA / QUIET","preview-blackpaper","A filmic, restrained world for premium vehicles and craftsmanship.",["luxury","cinema","automotive","premium"]],
    ["Motorsport","SPEED / GRAPHIC / BOLD","preview-red","Strong grids, numbers and movement for performance-focused brands.",["motorsport","speed","bold","graphic"]],
    ["Electric future","TECH / SYSTEM / FUTURE","preview-blue","A cleaner technical system for EV, mobility and future transport.",["electric","future","tech","system"]]
  ]},
  {name:"Nonprofit / mission",category:"service",directions:[
    ["Human stories","PEOPLE / REPORTAGE / HONEST","preview-photo","Put real stories and people first, with simple strong typography.",["nonprofit","human","story","community"]],
    ["Field report","FIELD NOTE / DATA / DOCUMENTARY","preview-olive","A research-driven system for reporting, impact and long-term work.",["report","data","impact","documentary"]],
    ["Cultural institution","EDITORIAL / ARCHIVE / CURATED","preview-paper","A more cultural, museum-like presence for foundations and institutions.",["institution","culture","archive","editorial"]],
    ["Action poster","BOLD / DIRECT / ACTIVIST","preview-red","A graphic public-facing direction built for campaigns and mobilising attention.",["campaign","bold","mission","poster"]]
  ]}
];

const flatDirections = NICHES.flatMap(niche => niche.directions.map((d,index)=>({niche:niche.name,category:niche.category,name:d[0],mood:d[1],preview:d[2],copy:d[3],tags:d[4],index})));
const grid=document.getElementById("styleGrid");
const count=document.getElementById("resultCount");
const search=document.getElementById("nicheSearch");
const selectedBar=document.getElementById("selectedBar");
const selectedTitle=document.getElementById("selectedTitle");
const clearSelection=document.getElementById("clearSelection");
const modal=document.getElementById("styleModal");
const modalPreview=document.getElementById("modalPreview");
const modalMeta=document.getElementById("modalMeta");
const modalTitle=document.getElementById("modalTitle");
const modalCopy=document.getElementById("modalCopy");
const modalTags=document.getElementById("modalTags");
const modalCta=document.getElementById("modalCta");
const categoryFilters=[...document.querySelectorAll(".filter")];
let activeCategory="all";
let query="";
let activeDirection=null;

const esc = value => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const cardHTML = (item,i) => `
  <article class="style-card" data-category="${esc(item.category)}" data-index="${i}" data-search="${esc((item.niche+" "+item.name+" "+item.mood+" "+item.tags.join(" ")).toLowerCase())}">
    <div class="style-art ${item.preview}">
      <span class="stamp">${esc(item.niche)} / ${String(item.index+1).padStart(2,"0")}</span>
      <h3>${esc(item.name).replace(" / ","<br>")}<br><em>${esc(item.mood.split(" / ")[0])}</em></h3>
      <span class="micro">CLICK TO OPEN DIRECTION ↗</span>
    </div>
    <div class="style-meta"><strong>${esc(item.niche)}</strong><span>${esc(item.mood)}</span></div>
  </article>`;
grid.innerHTML=flatDirections.map(cardHTML).join("");

function matches(item){
  const categoryOk=activeCategory==="all" || item.category===activeCategory;
  const text=(item.niche+" "+item.name+" "+item.mood+" "+item.tags.join(" ")).toLowerCase();
  return categoryOk && (!query || text.includes(query));
}
function render(){
  let visible=0;
  [...grid.children].forEach((card,i)=>{
    const item=flatDirections[i];
    const show=matches(item);
    card.classList.toggle("hidden",!show);
    if(show) visible++;
  });
  count.textContent=`${visible} DIRECTIONS`;
  const empty=visible===0;
  let node=grid.querySelector(".no-results");
  if(empty && !node){node=document.createElement("div");node.className="no-results";grid.appendChild(node)}
  if(node){node.textContent= query ? `Nothing matched "${query}". Try another niche or mood.` : "No directions in this category.";node.style.display=empty?"block":"none"}
}
function openDirection(item){
  activeDirection=item;
  selectedBar.classList.add("active");
  selectedTitle.textContent=`${item.niche} / ${item.name}`;
  modalPreview.innerHTML=`<div class="style-art ${item.preview}"><span class="stamp">${esc(item.niche)} / OFFCUT</span><h3>${esc(item.name)}<br><em>${esc(item.mood.split(" / ")[0])}</em></h3><span class="micro">VISUAL DIRECTION / 2026</span></div>`;
  modalMeta.textContent=`${item.niche} / ${item.mood} / DIRECTION ${String(item.index+1).padStart(2,"0")}`;
  modalTitle.textContent=item.name;
  modalCopy.textContent=item.copy;
  modalTags.innerHTML=item.tags.map(t=>`<span>${esc(t)}</span>`).join("");
  modalCta.href=`mailto:brahimmagency@gmail.com?subject=${encodeURIComponent("OFFCUT project / "+item.niche+" / "+item.name)}`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-lock");
}
function closeDirection(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-lock");
}
grid.addEventListener("click",e=>{
  const card=e.target.closest(".style-card");
  if(!card || card.classList.contains("no-results")) return;
  openDirection(flatDirections[Number(card.dataset.index)]);
});
categoryFilters.forEach(btn=>btn.addEventListener("click",()=>{
  categoryFilters.forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");
  activeCategory=btn.dataset.filter;
  render();
}));
search.addEventListener("input",e=>{query=e.target.value.trim().toLowerCase();render()});
clearSelection.addEventListener("click",()=>{
  selectedBar.classList.remove("active");
  selectedTitle.textContent="Nothing selected yet";
  activeDirection=null;
});
document.getElementById("modalClose").addEventListener("click",closeDirection);
modal.addEventListener("click",e=>{if(e.target.hasAttribute("data-close-modal"))closeDirection()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("open"))closeDirection()});
render();
