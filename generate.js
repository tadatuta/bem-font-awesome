const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const mv = require('mv');

const faSourceFolder = path.join('node_modules', 'font-awesome');

mv(path.join(faSourceFolder, 'fonts'), path.join(__dirname, 'fonts'), err => {
    if (err && err.code !== 'ENOENT') console.error(err);
});

if (!fs.existsSync(path.join('fa', '_icon'))) {
    fs.mkdirSync(path.join('fa', '_icon'));
}

const selectorRegexp = /\.fa\-(.+)\:before/; // .fa-clock-o:before

const css = fs.readFileSync(path.join(faSourceFolder, 'css', 'font-awesome.css'), 'utf8');

const fa = postcss.plugin('fa', function(options = {}) {
    return function(css) {
        css.walkRules(function(rule) {
            const selectors = rule.selector.split(',');

            selectors.forEach(selector => {
                const parsedSelector = selectorRegexp.exec(selector);
                if (!parsedSelector) return;

                const modVal = parsedSelector[1];

                const result = [
                    '.fa_icon_' + modVal + ':before {'
                ];

                rule.walkDecls(function(decl, i) {
                    result.push(decl.raws.before + '  ' + decl.prop + decl.raws.between + decl.value + ';');
                });

                result.push('\n}');

                fs.writeFileSync(path.join('fa', '_icon', 'fa_icon_' + modVal + '.css'), result.join(''));
            });
        });
    }
});

postcss([fa]).process(css).then(result => console.log('done'));
