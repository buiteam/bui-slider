/**/

var $ = require('jquery'),
  expect = require('expect.js'),
  Slider = require('../src/slider');

describe('初始化', function() {
  $('<div id="s1"></div>').appendTo(document.body);
  var slider = new Slider({
    render : '#s1',
    elCls : 'progress',
    
    backTpl : '<div class="bar"></div>',
    value : 30
  });

  slider.render();

  var el = slider.get('el')

  describe('初始化',function(){
    it('测试滑块生成',function(){
      expect(el.find('.x-slider-handle').length).not.to.be(0);
    });
    it('测试背景生成',function(){
      expect(el.find('.x-slider-back').length).not.to.be(0);
    });
    it('测试初始值',function(done){
      setTimeout(function(){
        expect(el.find('.x-slider-back')[0].style.width).to.be('30%');
        expect(el.find('.x-slider-handle')[0].style.left).to.be('30%');
        done();
      }, 400);  
    });
  });

  describe('操作',function(){
    it('改变值',function(done){
      slider.set('value',50);
      setTimeout(function(){
        expect(el.find('.x-slider-back')[0].style.width).to.be('50%');
        expect(el.find('.x-slider-handle')[0].style.left).to.be('50%');
        done();
      }, 400);
      
    });
  });

  describe('事件',function(){

    it('测试改变',function(){

    });
    it('测试点击',function(){

    });

    it('测试拖拽',function(){

    });
  });

  describe('键盘操作',function(){
    it('上',function(){

    });

    it('下',function(){

    });

    it('左',function(){

    });

    it('右',function(){

    });
  });
});

describe('初始化', function() {

  $('<div id="s2"></div>').appendTo(document.body);
  var slider = new Slider({
    render : '#s2',
    isVertical : true,
    //duration : 4000,
    height:200,
    step:10,
    value : 30
  });

  slider.render();

  var el = slider.get('el')

  describe('初始化',function(){
    it('测试垂直',function(){
      expect(el.hasClass('x-slider-vertical')).to.be(true);
    });
    it('测试初始值',function(done){
      setTimeout(function(){
        expect(el.find('.x-slider-back')[0].style.height).to.be('30%');
        expect(el.find('.x-slider-handle')[0].style.bottom).to.be('30%');
        done()
      }, 400);
      
    });
  });
});

describe('初始化', function() {
  $('<div id="s3"></div>').appendTo(document.body);
  var slider = new Slider({
    render : '#s3',
    range : true,
    value : [30,50]
  });

  slider.render();

  var el = slider.get('el')

  describe('初始化',function(){
    it('测试滑块',function(){
      expect(el.find('.x-slider-handle').length).to.be(2);
    });
    it('测试初始值',function(done){
      setTimeout(function(){
        expect(el.find('.x-slider-handle')[0].style.left).to.be('30%');
        expect(el.find('.x-slider-handle')[1].style.left).to.be('50%');
        expect(el.find('.x-slider-back')[0].style.width).to.be('20%');
        expect(el.find('.x-slider-back')[0].style.left).to.be('30%');
        done()
      }, 400);
    });
  });

  describe('操作',function(){
    it('更改范围',function(done){
      slider.set('value',[20,60]);
      setTimeout(function(){
        expect(el.find('.x-slider-handle')[0].style.left).to.be('20%');
        expect(el.find('.x-slider-handle')[1].style.left).to.be('60%');
        expect(el.find('.x-slider-back')[0].style.width).to.be('40%');
        expect(el.find('.x-slider-back')[0].style.left).to.be('20%');
        done();
      }, 400);
    });
  });
});

describe('初始化', function() {
  $('<div id="s4"></div>').appendTo(document.body);
  var slider = new Slider({
    render : '#s4',
    isVertical : true,
    height:200,
    range : true,
    value : [30,50]
  });

  slider.render();

  var el = slider.get('el')

  describe('初始化',function(){
    it('测试滑块',function(){
      expect(el.find('.x-slider-handle').length).to.be(2);
    });
    it('测试初始值',function(done){
      setTimeout(function(){
        expect(el.find('.x-slider-handle')[0].style.bottom).to.be('30%');
        expect(el.find('.x-slider-handle')[1].style.bottom).to.be('50%');
        expect(el.find('.x-slider-back')[0].style.height).to.be('20%');
        expect(el.find('.x-slider-back')[0].style.bottom).to.be('30%');
        done();
      }, 400);
    });
  });

  describe('操作',function(){
    it('更改范围',function(done){
      slider.set('value',[20,60]);
      setTimeout(function(){
        expect(el.find('.x-slider-handle')[0].style.bottom).to.be('20%');
        expect(el.find('.x-slider-handle')[1].style.bottom).to.be('60%');
        expect(el.find('.x-slider-back')[0].style.height).to.be('40%');
        expect(el.find('.x-slider-back')[0].style.bottom).to.be('20%');
        done();
      }, 400);
    });
  });
});

describe('初始化', function() {
  $('<div id="s5"></div>').appendTo(document.body);
  var slider = new Slider({
    render : '#s5',
    elCls : 'progress',
    min : 1000,
    max : 1000,
    value : 1000,
    backTpl : '<div class="bar"></div>'
  });

  slider.render();

  var el = slider.get('el')

  describe('最小值等于最大值，初始化',function(){
    it('测试滑块生成',function(){
      expect(el.find('.x-slider-handle').length).not.to.be(0);
    });
    it('测试背景生成',function(){
      expect(el.find('.x-slider-back').length).not.to.be(0);
    });
    it('测试初始值',function(done){
      setTimeout(function(){
        expect(el.find('.x-slider-back')[0].style.width).to.be('100%');
        expect(el.find('.x-slider-handle')[0].style.left).to.be('100%');
        done();
      }, 400);  
    });
  });

});
