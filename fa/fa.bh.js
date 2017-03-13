module.exports = function(bh) {
    bh.match('fa', function(ctx) {
        ctx.tag('span');
    });
};
