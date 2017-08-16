'use strict';

$(function () {
    Highcharts.setOptions({
        colors: ['#ff6961', '#b6e329', '#1b7cd0', '#da62cc', '#00adeb', '#FF9655', '#FFF263', '#6AF9C4'],
        lang: {
            loading: 'Загрузка...',
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            shortMonths: ['ЯНВ', 'ФЕВ', 'МАРТ', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕНТ', 'ОКТ', 'НОЯБ', 'ДЕК'],
            exportButtonTitle: "Экспорт",
            printButtonTitle: "Печать",
            rangeSelectorFrom: "С",
            rangeSelectorTo: "По",
            rangeSelectorZoom: "Период",
            downloadPNG: 'Скачать PNG',
            downloadJPEG: 'Скачать JPEG',
            downloadPDF: 'Скачать PDF',
            downloadSVG: 'Скачать SVG',
            printChart: 'Напечатать график'
        }
    });

    $('#portfolio-structure').highcharts({
        chart: {
            plotBackgroundColor: "#f9f9fa",
            plotBorderWidth: 0,
            plotShadow: false,
            spacingTop: -10,
            spacingBottom: -10,
            spacingLeft: -10,
            spacingRight: -10
        },
        title: false,
        tooltip: false,
        plotOptions: {
            pie: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                },
                size: '100%',
                startAngle: -200,
                endAngle: 160
            }
        },
        series: [{
            type: 'pie',
            innerSize: 120,
            data: [
                ['Линейная P&G', 47.43],
                ['ИИС Рыночная', 25.49],
                ['Линейная Apple', 19.91],
                ['ИИС Рыночная', 4.38],
                ['Открытие – Облигации', 2.79]
            ],
            states: {
                hover: {
                    enabled: false
                }
            }
        }]
    });

    $('#unit-trust-portfolio').highcharts({
        chart: {
            plotBackgroundColor: "#f9f9fa",
            plotBorderWidth: 0,
            plotShadow: false,
            spacingTop: -10,
            spacingBottom: -10,
            spacingLeft: -10,
            spacingRight: -10
        },
        title: false,
        tooltip: false,
        plotOptions: {
            pie: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                },
                size: '100%',
                startAngle: 0,
                endAngle: 360
            }
        },
        series: [{
            type: 'pie',
            innerSize: 120,
            data: [
                ['Ингосстрах. Облигации', 59.69],
                ['Ингосстрах. Еврооблигации', 32.03],
                ['Ингосстрах. Риэл Эстейт', 8.28]
            ],
            states: {
                hover: {
                    enabled: false
                }
            }
        }]
    });

    $('#trust-managment-portfolio').highcharts({
        chart: {
            plotBackgroundColor: "#f9f9fa",
            plotBorderWidth: 0,
            plotShadow: false,
            spacingTop: -10,
            spacingBottom: -10,
            spacingLeft: -10,
            spacingRight: -10
        },
        title: false,
        tooltip: false,
        plotOptions: {
            pie: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                },
                size: '100%',
                startAngle: 10,
                endAngle: 370
            }
        },
        series: [{
            type: 'pie',
            innerSize: 120,
            data: [
                ['Облигации', 96.78],
                ['Прочие вложения', 2.21],
                ['Денежные средства у брокера', 1.01]
            ],
            states: {
                hover: {
                    enabled: false
                }
            }
        }]
    });

    $('#unit-trust-detalization').highcharts({
        chart: {
            type: 'spline',
            spacingLeft: 0,
            height: 500
        },
        title: false,
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '<div class="text-center">%d <br>  %b </div>'
            },
            tickWidth: 0,
            labels: {
                useHTML: true,
                style: {
                    color: '#8c9196',
                    fontSize: '0.6923rem'
                },
                y: 25,
                x: 15
            }
        },
        yAxis: {
            title: false,
            tickWidth: 0,
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            labels: {
                useHTML: true,
                style: {
                    color: '#8c9196',
                    fontSize: '0.6923rem'
                },
                y: 4
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            formatter: function () {
                return false;
            }
        },
        plotOptions: {
            spline: {
                lineWidth: 3,
                marker: {
                    enabled: false
                },
                pointStart: Date.UTC(2015, 4, 15),
                pointInterval: 24 * 3600 * 1000 // one day
            },
            series: {
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null,
                    symbol: 'circle'
                }
            }
        },
        series: [{
            name: 'Опиф',
            color: '#00adeb',
            data: [29.9, 71.5, 106.4, 129.2, 144.0]
        }, {
            name: 'Индекс облигаций ММВБ',
            color: '#ff6961',
            data: [9.9, 1.5, 16.4, 29.2, 14.0]
        }],
        legend: false

    });

    if(Highcharts.stockChart){
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

            // Create the chart
            var chart = Highcharts.stockChart('history-chart', {

                chart: {
                    height: 350,
                    spacingLeft: -10,
                    spacingRight: -10
                },
                title: false,
                rangeSelector: {
                    enabled: false
                },
                xAxis: {
                    tickWidth: 0,
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    gridLineWidth: 0,
                    labels: {
                        enabled: false
                    }
                },
                yAxis: {
                    tickWidth: 0,
                    gridLineWidth: 0,
                    labels: {
                        enabled: false
                    }
                },
                plotOptions: {
                    series: {
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 1,
                            lineColor: '#00adeb',
                            symbol: 'circle',
                            states: {
                                hover: {
                                    lineWidth: 2,
                                    radius: 6
                                }
                            }
                        },
                        fillOpacity: 1,
                        lineColor: '#00adeb',
                        lineWidth: 2,
                        states: {
                            hover: {
                                lineWidth: 2
                            }
                        }
                    }
                },
                scrollbar: false,
                navigator: false,
                tooltip: {
                    crosshairs: {
                        zIndex: 2
                    },
                    shared: true,
                    formatter: function () {
                        return false;
                    }
                },
                series: [{
                    data: data,
                    type: 'area',
                    color: '#cceffb',
                    fillOpacity: 0.75,
                    threshold: null,
                }]

            });
        });

    }

})