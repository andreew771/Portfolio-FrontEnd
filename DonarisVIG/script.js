
document.addEventListener('DOMContentLoaded', function() {
        
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        

        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        
        const coverageSlider = document.getElementById('coverage');
        const coverageValue = document.getElementById('coverage-value');
        
        if (coverageSlider && coverageValue) {
            coverageSlider.addEventListener('input', function() {
                const value = parseInt(this.value);
                coverageValue.textContent = '$' + value.toLocaleString();
            });
        }
        
        
        const toast = document.getElementById('toast');
        const toastTitle = document.getElementById('toast-title');
        const toastMessage = document.getElementById('toast-message');
        const toastIcon = document.getElementById('toast-icon');
        const toastClose = document.getElementById('toast-close');
        
        function showToast(type, title, message) {
            toastTitle.textContent = title;
            toastMessage.textContent = message;
            
            if (type === 'success') {
                toastIcon.className = 'w-8 h-8 flex items-center justify-center rounded-full mr-3 bg-primary text-white';
                toastIcon.innerHTML = '<i class="ri-check-line"></i>';
            } else if (type === 'error') {
                toastIcon.className = 'w-8 h-8 flex items-center justify-center rounded-full mr-3 bg-red-500 text-white';
                toastIcon.innerHTML = '<i class="ri-error-warning-line"></i>';
            } else if (type === 'info') {
                toastIcon.className = 'w-8 h-8 flex items-center justify-center rounded-full mr-3 bg-blue-500 text-white';
                toastIcon.innerHTML = '<i class="ri-information-line"></i>';
            }
            
            toast.classList.remove('invisible', 'opacity-0', 'translate-x-full');
            toast.classList.add('visible', 'opacity-100', 'translate-x-0');
            
            setTimeout(() => {
                toast.classList.remove('visible', 'opacity-100', 'translate-x-0');
                toast.classList.add('invisible', 'opacity-0', 'translate-x-full');
            }, 5000);
        }
        
        toastClose.addEventListener('click', function() {
            toast.classList.remove('visible', 'opacity-100', 'translate-x-0');
            toast.classList.add('invisible', 'opacity-0', 'translate-x-full');
        });
        
        
        const quoteForm = document.getElementById('quote-form');
        if (quoteForm) {
            quoteForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                
                
                
                setTimeout(() => {
                    showToast('success', 'Quote Request Sent!', 'We\'ll get back to you with a personalized quote shortly.');
                    quoteForm.reset();
                }, 1000);
            });
        }
        

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                
                setTimeout(() => {
                    showToast('success', 'Message Sent!', 'Thank you for contacting us. We\'ll respond as soon as possible.');
                    contactForm.reset();
                }, 1000);
            });
        }
        
        // Subscribe Form Submission
        const subscribeForm = document.getElementById('subscribe-form');
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Form validation would go here
                
                // Simulate form submission
                setTimeout(() => {
                    showToast('success', 'Subscribed!', 'You\'ve been added to our newsletter.');
                    subscribeForm.reset();
                }, 1000);
            });
        }
        
        // Initialize Charts
        // Claims Chart
        const claimsChart = document.getElementById('claims-chart');
        if (claimsChart) {
            const chart = echarts.init(claimsChart);
            const option = {
                animation: false,
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: '#f0f0f0',
                    textStyle: {
                        color: '#1f2937'
                    }
                },
                legend: {
                    top: 'bottom',
                    left: 'center',
                    textStyle: {
                        color: '#1f2937'
                    }
                },
                series: [
                    {
                        name: 'Distribuția cererilor de despăgubire',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 8,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '18',
                                fontWeight: 'bold',
                                color: '#1f2937'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 35, name: 'Asigurare imobil', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
                            { value: 30, name: 'Asigurare auto', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
                            { value: 20, name: 'Asigurare sanatate', itemStyle: { color: 'rgba(251, 191, 114, 1)' } },
                            { value: 15, name: 'Asigurare viata', itemStyle: { color: 'rgba(252, 141, 98, 1)' } }
                        ]
                    }
                ]
            };
            
            chart.setOption(option);
            
            window.addEventListener('resize', function() {
                chart.resize();
            });
        }
        
        // Satisfaction Chart
        const satisfactionChart = document.getElementById('satisfaction-chart');
        if (satisfactionChart) {
            const chart = echarts.init(satisfactionChart);
            const option = {
                animation: false,
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: '#f0f0f0',
                    textStyle: {
                        color: '#1f2937'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2020', '2021', '2022', '2023', '2024', '2025'],
                    axisLabel: {
                        color: '#1f2937'
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}%',
                        color: '#1f2937'
                    },
                    max: 100
                },
                series: [
                    {
                        name: 'Satisfacție generală',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 3,
                            color: 'rgba(87, 181, 231, 1)'
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(87, 181, 231, 0.3)'
                                }, {
                                    offset: 1, color: 'rgba(87, 181, 231, 0.1)'
                                }]
                            }
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [82, 85, 88, 91, 94, 96]
                    },
                    {
                        name: 'Satisfacția reclamațiilor',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 3,
                            color: 'rgba(141, 211, 199, 1)'
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(141, 211, 199, 0.3)'
                                }, {
                                    offset: 1, color: 'rgba(141, 211, 199, 0.1)'
                                }]
                            }
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [78, 82, 85, 89, 92, 95]
                    },
                    {
                        name: 'Serviciul clienți',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 3,
                            color: 'rgba(251, 191, 114, 1)'
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(251, 191, 114, 0.3)'
                                }, {
                                    offset: 1, color: 'rgba(251, 191, 114, 0.1)'
                                }]
                            }
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [85, 87, 90, 93, 95, 98]
                    }
                ]
            };
            
            chart.setOption(option);
            
            window.addEventListener('resize', function() {
                chart.resize();
            });
        }
    });