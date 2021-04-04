const motionPath = MorphSVGPlugin.pathDataToBezier('#motionPath', {align: '#plane'}).reverse();

const tl = new TimelineMax({
  repeat: -1,
  repeatDelay: 3
});

tl.add('beginning')
tl.staggerFromTo('#plane path', 0.5, {
  drawSVG: 0,
  opacity: 0
}, {
  drawSVG: true,
  opacity: 1
}, -0.3);
tl.fromTo('#motionPath', 8, {
  drawSVG: '100%, 100%',
  opacity: 0,
  ease:Power1.easeInOut
}, {
  drawSVG: '0%, 100%',
  opacity: 1,
  ease:Power1.easeInOut
}, 'beginning')
tl.to('#plane', 8, {bezier:{type: 'cubic', values: motionPath, autoRotate:true}, ease:Power1.easeInOut}, 'beginning');
tl.to('#plane, #motionPath', 0.5, {
  opacity: 0
})