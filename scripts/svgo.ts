/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

(async () => {
  const inputPath = process.argv[2];
  if (!fs.existsSync(inputPath)) {
    console.error('没有找到需要转换的文件');
    return;
  }

  console.info('转换开始');

  let svg = fs.readFileSync(inputPath).toString();
  console.log(svg)
  // 处理颜色
  if (/fill="\S+"/.test(svg) || /fill:\S+;/.test(svg)) {
    svg = svg.replace(/fill="#\S+"/g, 'fill="currentColor"');
    svg = svg.replace(/fill:#\S+;/g, 'fill:currentColor;');
  } else {
    svg = svg.replace('<svg ', '<svg fill="currentColor" ');
  }

  svg = svg.replace(/stroke="#\S+"/g, 'stroke="currentColor"');
  svg = svg.replace(/stroke:#\S+;/g, 'stroke:currentColor;');

  // 处理宽高
  if (
    /<svg[\S\s]+width[\S\s]+>/.test(svg.substr(0, svg.indexOf('>') + 1))
  ) {
    svg = svg.replace(/width="\S+"/, 'width="1em"');
    svg = svg.replace(/height="\S+"/, 'height="1em"');
  } else {
    svg = svg.replace('<svg ', '<svg width="1em" ');
    svg = svg.replace('<svg ', '<svg height="1em" ');
  }

  svg = svg.replace(/class="\S+"/g, '');
  svg = svg.replace('<svg ', '<svg class="icon" ');
  const svgFile = fs.createWriteStream(inputPath);
  svgFile.write(svg);
  console.info('转换完成');
  console.log(svg)


  /** 处理 export-icon.ts 文件 */
  const files = fs.readdirSync('./src/assets/icon');
  const importContent = files
    .map((file) => {
      const varName = file
        .replace(/^[-|.]/, '')
        .replace(/[-|.](\w)(\w+)/g, function (a, b, c) {
          return b.toUpperCase() + c.toLowerCase();
        });
      return `import ${varName} from '../../assets/icon/${file}';`;
    })
    .join('\n');

  const exportContent = files
    .map((file) => {
      const varName = file
        .replace(/^[-|.]/, '')
        .replace(/[-|.](\w)(\w+)/g, function (a, b, c) {
          return b.toUpperCase() + c.toLowerCase();
        });
      return `  'xi-icon-${file.replace('.svg', '')}': ${varName},`;
    })
    .join('\n');

  const content = `${importContent}

export default {
${exportContent.substr(0, exportContent.length - 1)}
};\n`;
  const exportIcon = fs.createWriteStream('./src/components/xi-icon/export-icon.ts');
  exportIcon.write(content);
})();
