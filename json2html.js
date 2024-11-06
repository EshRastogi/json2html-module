// json2html.js
export default function json2html(data) {
    const headers = ["Name", "Age", "Gender"];
    let html = '<table data-user="eshrastogi2001@gmail.com">\n';
  
    html += '  <thead>\n    <tr>';
    headers.forEach(header => html += `<th>${header}</th>`);
    html += '</tr>\n  </thead>\n';
  
    html += '  <tbody>\n';
    data.forEach(row => {
      html += '    <tr>';
      headers.forEach(header => html += `<td>${row[header] || ''}</td>`);
      html += '</tr>\n';
    });
    html += '  </tbody>\n</table>';
  
    return html;
  }
  