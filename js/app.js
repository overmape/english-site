/* Яндекс.Метрика: впишите номер своего счётчика вместо 0 — тогда подключатся Вебвизор, карта кликов и цели.
   Цели (ЛР13): trial_request – заявка на пробный урок (JS-событие, вызывается ниже при отправке формы);
   «Просмотр каталога курсов» – посещение страницы, URL содержит /courses/; «Вовлечённый визит» – время на сайте больше 3 минут. */
window.YM_ID=0;
(function(m,e,t,r,i,k,a){
  if(!window.YM_ID)return;
  m[i]=m[i]||function(){
    (m[i].a=m[i].a||[]).push(arguments)
  };
  m[i].l=1*new Date();
  k=e.createElement(t);
  a=e.getElementsByTagName(t)[0];
  k.async=1;
  k.src=r;
  a.parentNode.insertBefore(k,a)
})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
if(window.YM_ID)ym(window.YM_ID,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
(function(){
  var $=function(i){
    return document.getElementById(i)
  };
  $('bg').onclick=function(){
    $('nv').classList.toggle('open')
  };
  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-say]');
    if(b&&window.speechSynthesis){
      var u=new SpeechSynthesisUtterance(b.dataset.say);
      u.lang='en-US';
      speechSynthesis.cancel();
      speechSynthesis.speak(u)
    }
  });
  document.addEventListener('submit',function(e){
    var f=e.target;
    if(!f.classList.contains('lf'))return;
    e.preventDefault();
    if(window.YM_ID&&window.ym)ym(window.YM_ID,'reachGoal','trial_request');
    var d=Object.fromEntries(new FormData(f));
    d.src=f.dataset.src;
    d.t=new Date().toISOString();
    try{
      var a=JSON.parse(localStorage.leads||'[]');
      a.push(d);
      localStorage.leads=JSON.stringify(a)
    }catch(x){
    }
    var o=f.querySelector('.ok');
    o.hidden=false;
    o.textContent='Спасибо, '+d.n+'! Заявка принята (демо: на сервер не отправляется).';
    f.reset()
  });
  var W='hello=привет;goodbye=до свидания;thank you=спасибо;please=пожалуйста;yes=да;no=нет;water=вода;food=еда;house=дом;family=семья;friend=друг;work=работа;school=школа;book=книга;time=время;day=день;night=ночь;man=мужчина;woman=женщина;child=ребёнок;city=город;street=улица;car=машина;ticket=билет;passport=паспорт;airport=аэропорт;hotel=отель;room=комната;restaurant=ресторан;menu=меню;bill=счёт;money=деньги;help=помощь;love=любовь;happy=счастливый;big=большой;small=маленький;good=хороший;bad=плохой;eat=есть;drink=пить;go=идти;see=видеть;know=знать;learn=учить;speak=говорить;read=читать;write=писать;travel=путешествовать;breakfast=завтрак'.split(';').map(function(x){
    return x.split('=')
  });
  document.querySelectorAll('.dict').forEach(function(w){
    var i=w.querySelector('input'),u=w.querySelector('ul');
    i.oninput=function(){
      var v=i.value.trim().toLowerCase();
      if(!v){
        u.innerHTML='';
        return
      }
      var r=W.filter(function(p){
        return p[0].indexOf(v)>-1||p[1].indexOf(v)>-1
      }).slice(0,8);
      u.innerHTML=r.length?r.map(function(p){
        return '<li><button class="sp" data-say="'+p[0]+'">🔊</button> <b>'+p[0]+'</b> — '+p[1]+'</li>'
      }).join(''):'<li>Нет в демо-словаре</li>'
    }
  });
  var q=$('quiz');
  if(!q)return;
  var Q=[["She ___ a student.", ["am", "is", "are"], 1], ["I ___ coffee every morning.", ["drink", "drinks", "drinking"], 0], ["There ___ two cats in the room.", ["is", "are", "be"], 1], ["Yesterday we ___ to the cinema.", ["go", "goed", "went"], 2], ["I have lived here ___ 2020.", ["for", "since", "from"], 1], ["If it rains, we ___ at home.", ["stay", "will stay", "stayed"], 1], ["He is ___ than his brother.", ["tall", "taller", "tallest"], 1], ["She asked me where ___.", ["did I live", "I lived", "do I live"], 1], ["I wish I ___ more time.", ["have", "had", "would have"], 1], ["By next year they ___ the house.", ["will build", "will have built", "build"], 1], ["He suggested ___ the meeting.", ["to postpone", "postponing", "postpone"], 1], ["Hardly ___ the room when the phone rang.", ["I had entered", "had I entered", "I entered"], 1]],i=0,s=0;
  function show(){
    if(i>=Q.length)return end();
    var x=Q[i];
    q.innerHTML='<p>Вопрос '+(i+1)+' из '+Q.length+'</p><h3>'+x[0]+'</h3>'+x[1].map(function(o,k){
      return '<button class="opt" data-k="'+k+'">'+o+'</button>'
    }).join('')
  }
  q.onclick=function(e){
    var b=e.target.closest('.opt');
    if(!b)return;
    if(+b.dataset.k===Q[i][2])s++;
    i++;
    show()
  };
  function end(){
    var L=s<=3?['A1','english-from-zero']:s<=6?['A2','spoken-english']:s<=9?['B1–B2','grammar']:['C1','ielts-toefl'];
    q.hidden=true;
    var r=$('res');
    r.hidden=false;
    r.querySelector('.lv').textContent='Ваш уровень: '+L[0]+' ('+s+' из '+Q.length+')';
    r.querySelector('.rec').href='../courses/'+L[1]+'/'
  }
  show()
})();
