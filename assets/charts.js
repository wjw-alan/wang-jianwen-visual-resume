(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var charts = [];

  function baseText() {
    return { color: muted, fontFamily: 'Microsoft YaHei, Arial, sans-serif' };
  }

  function init(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    var chart = echarts.init(el, null, { renderer: 'svg' });
    charts.push(chart);
    return chart;
  }

  var skills = init('chart-skills');
  if (skills) {
    skills.setOption({
      animation: false,
      color: [accent, accent2],
      tooltip: { appendToBody: true },
      radar: {
        indicator: [
          { name: 'Python 数据分析', max: 100 },
          { name: 'SQL 数据库', max: 100 },
          { name: '可视化表达', max: 100 },
          { name: '大数据基础', max: 100 },
          { name: 'Web 对接', max: 100 },
          { name: '团队协作', max: 100 }
        ],
        axisName: { color: muted, fontSize: 12 },
        splitLine: { lineStyle: { color: rule } },
        splitArea: { areaStyle: { color: [bg2, 'rgba(37,99,235,0.04)'] } },
        axisLine: { lineStyle: { color: rule } }
      },
      series: [{
        type: 'radar',
        data: [{
          value: [86, 84, 82, 68, 70, 88],
          name: '能力匹配度',
          areaStyle: { color: 'rgba(37,99,235,0.16)' },
          lineStyle: { width: 3, color: accent },
          itemStyle: { color: accent }
        }]
      }]
    });
  }

  var projects = init('chart-projects');
  if (projects) {
    projects.setOption({
      animation: false,
      color: [accent, accent2],
      tooltip: { appendToBody: true, trigger: 'axis' },
      grid: { left: 12, right: 18, top: 24, bottom: 10, containLabel: true },
      xAxis: {
        type: 'value',
        axisLabel: baseText(),
        splitLine: { lineStyle: { color: rule } }
      },
      yAxis: {
        type: 'category',
        data: ['用户评分数据', '核心数据表', '查询优化点', '响应提升'],
        axisLabel: baseText(),
        axisLine: { lineStyle: { color: rule } },
        axisTick: { show: false }
      },
      series: [{
        name: '量化成果',
        type: 'bar',
        data: [100000, 8, 3, 30],
        label: {
          show: true,
          position: 'right',
          color: ink,
          formatter: function(params) {
            var labels = ['10万条', '8张', '3处', '30%'];
            return labels[params.dataIndex];
          }
        },
        itemStyle: {
          color: function(params) {
            return params.dataIndex % 2 === 0 ? accent : accent2;
          },
          borderRadius: [0, 8, 8, 0]
        }
      }]
    });
  }

  var timeline = init('chart-timeline');
  if (timeline) {
    timeline.setOption({
      animation: false,
      color: [accent, accent2],
      tooltip: { appendToBody: true, trigger: 'axis' },
      grid: { left: 12, right: 18, top: 28, bottom: 18, containLabel: true },
      xAxis: {
        type: 'category',
        data: ['2023.09', '2024.06', '2024.07', '2025.02', '2025.06'],
        axisLabel: baseText(),
        axisLine: { lineStyle: { color: rule } },
        axisTick: { show: false }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 5,
        axisLabel: { show: false },
        splitLine: { lineStyle: { color: rule } }
      },
      series: [{
        name: '经历节点',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 12,
        data: [1, 2, 3, 4, 5],
        lineStyle: { width: 4, color: accent },
        itemStyle: { color: accent2 },
        areaStyle: { color: 'rgba(20,184,166,0.12)' },
        label: {
          show: true,
          position: 'top',
          color: ink,
          formatter: function(params) {
            return ['入学/任职', '国创申报', '推荐系统', '导师项目', '超市系统'][params.dataIndex];
          }
        }
      }]
    });
  }

  window.addEventListener('resize', function() {
    charts.forEach(function(chart) { chart.resize(); });
  });
})();
