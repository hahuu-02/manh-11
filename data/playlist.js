const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORANGE = 'Huu_player'

const playlists = $$('.conten__song');
const headings = $$('.player__title-song');
const authors = $$('.player__title-author');
const cdThumb = $('.player__container-image');
const cdThumb1 = $('.player__container-image-1');
const cdThumb2 = $('.footer__container-img')
const audio = $('#audio');
const playBtns = $$('.player--btn')
const playings = $$('.icon-play')
const pauses = $('.icon-pause')
const progress = $$('#progress')
const timeProgress = $$('.time-progress')
const remaningTimes = $$('.time-start')
const nextBtns = $$('.icon-next')
const prevBtns = $$('.icon-prev')
const randomBtns = $$('.icon-random')
const activePrimay = $('.song__list-icon')
const repeatBtns = $$('.icon-repeat')
const volumeBtn = $('.player-volume')
const footerFull = $('.app__footer')
const closeFooterFull = $('.iconClose--footerFull')
const playAlls = $$('.button-function')

// console.log(playAll)

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORANGE)) || {},
    songs: [
        {
            name: 'Ai Chung Tình Được Mãi',
            author: 'Đình Tùng Huy',
            image:'./data/img-playlist/OSEDE9306.JPG' ,
            time: '5:58',
            song: './data/music-playlist/Ai chung tình được mãi - Đinh Tùng Huy _ Dunghoangpham Cover.mp3',
        },
        {
            name: 'Anh Vẫn Ở Đây',
            author: 'Thành Đạt',
            time: '4:19',
            image:'./data/img-playlist/avo đây.jpg' ,
            song: './data/music-playlist/Anh Vẫn Ở Đây ( Lofi ver. ) _ Thành Đạt.mp3',
        },
        {
            name: 'Âm Thầm Bên Em',
            author: 'Sơn Tùng MTP',
            time: '3:52',
            image:'./data/img-playlist/âtbenem.jpg',
            song: './data/music-playlist/Âm Thầm Bên Em (Lofi Ver.) - Sơn Tùng M-TP x Quanvrox.mp3',
        },
        {
            name: 'Biết Tìm Đâu',
            author: 'Tiến Tới',
            time: '3:57',
            image:'./data/img-playlist/biettimddu.jpg' ,
            song: './data/music-playlist/Biết Tìm Đâu (Lofi Ver) - Tiến Tới x Freak D _ Khát khao mong trở lại một ngày êm đềm...mp3',
        },
        {
            name: 'Chạnh Lòng Thương Cô 2',
            author: 'Huy Vạc',
            time: '5:11',
            image:'./data/img-playlist/clt cô.jpg' ,
            song: './data/music-playlist/CHẠNH LÒNG THƯƠNG CÔ 2 (Official MV) - HUY VẠC (Prod. HƯNG HACK).mp3',
        },
        {
            name: 'Chia Cách Bình Yên',
            author: 'Quốc Thiên',
            image:'./data/img-playlist/hương ly.jpg' ,
            song: './data/music-playlist/Chia cách bình yên.mp3',
        },
        {
            name: 'Chẳngg Thể Tìm Được Em',
            author: 'PhúcXP',
            time: '5:47',
            image:'./data/img-playlist/cttimdc e.jpg' ,
            song: './data/music-playlist/Chẳng Thể Tìm Được Em - PhucXp ft. Freak D _ Official Audio.mp3',
        },
        {
            name: 'Dạ Vũ',
            author: 'Hữu dẹpd zai',
            time: '3:16',
            image:'./data/img-playlist/dạvux.jpg' ,
            song: './data/music-playlist/dạ vũ.mp3',
        },
        {
            name: 'Dancing With Your Gost',
            author: 'Hữu hát chứ ai nữa',
            time: '3:50',
            image:'./data/img-playlist/DCJQ7231.JPEG' ,
            song: './data/music-playlist/Dancing With Your Ghost.mp3',
        },
        {
            name: 'Hạc Giấy',
            author: 'Yến Napun x Ciray',
            time: '3:58',
            image:'./data/img-playlist/hạc giấy.jpg' ,
            song: './data/music-playlist/Hạc Giấy - Yến Napun x Ciray _ Ngày Mai Nếu Lúc Thức Dậy Và Em Thấy Anh Bên Cạnh Remix Hot Tik Tok.mp3',
        },
        {
            name: 'Hạnh Phúc Em Không Có',
            author: 'Hữu đẹp trai thật ẹ',
            time: '3:16',
            image:'./data/img-playlist/hpaekoco.jpg' ,
            song: '/data/music-playlist/hạnh phúc em k có.mp3',
        },
        {
            name: 'Nevada',
            author: 'Hà Hữu',
            time: '3:28',
            image:'./data/img-playlist/GFQQ3926.JPEG' ,
            song: './data/music-playlist/Nevada.mp3',
        },
        {
            name: 'Sumertime',
            author: 'Hà Hữu',
            time: '4:42',
            image:'./data/img-playlist/IMG_E2611 (3).JPG' ,
            song: './data/music-playlist/Summertime _Sunshine_.mp3',
        },
        {
            name: 'Let Me Down Slowly',
            author: 'Hà Hữu',
            time: '4:42',
            image:'./data/img-playlist/BBXW9760.JPEG' ,
            song: './data/music-playlist/Let Me Down Slowly.mp3',
        },
        {
            name: 'Trắc trở (Remix)',
            author: 'Hương ly',
            time: '4:44',
            image:'./data/img-playlist/hương ly.jpg' ,
            song: './data/music-playlist/Trắc Trở REMIX.mp3',
        },
       
        
      
    
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORANGE, JSON.stringify(this.config))
    },

    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song__playlist ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="song__list ">
                    <div class="song__list-conten">
                        <div class="song__list-img"
                            style="background: url('${song.image}') no-repeat center / cover">                                   
                        </div> 

                        <div class="song__list-header">
                            <h3 class="song__list-conten-title">${song.name} </h3>
                            <p class="song__list-conten-author">${song.author}</p>
                        </div>
                    </div>

                    <div class="song__list-time hide-on-tablet-mobile">
                        <span>${song.time}</span>
                    </div>

                    <div class="song__list-item"> 
                        <div class="song__list-icon hide-on-mobile">
                            <i class="bi bi-mic-fill song__list-icon-mic"></i>
                        </div>

                        <div class="song__list-icon  hide-on-mobile icon--heart">
                            <i class="bi bi-heart-fill song__list-icon-heart"></i>
                        </div>

                        <div class="song__list-icon hide-on-tablet">
                            <i class="bi bi-three-dots song__list-icon-three"></i>
                        </div>
                    </div>
                </div>
           </div>
          `
        })
        playlists.forEach(playlist => {
            playlist.innerHTML = htmls.join('')

        })
    },

    handelEvent: function() {
        progress.oninput = function() {
            progressBtn.innerHTML = this.value;
        }
        const _this = this

        // Xử lí quay image
       
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
            ], {
            duration: 15000,
            iterations: Infinity
            
        });            
        cdThumbAnimate.pause();

        const cdThumbAnimate1 = cdThumb1.animate([
            { transform: 'rotate(360deg)' }
            ], {
            duration: 15000,
            iterations: Infinity
            
        });            
        cdThumbAnimate1.pause();
      
        const cdThumbAnimate2 = cdThumb2.animate([
            { transform: 'rotate(360deg)' }
         ], {
            duration: 15000,
            iterations: Infinity
            
        });
        cdThumbAnimate2.pause();

        // xử lí khí click play 
        playBtns.forEach(playBtn => {
            playBtn.onclick = function() {
                if(_this.isPlaying) {
                    audio.pause()
                } else {
                    audio.play()    
                }
            }   

        })
        

        //khi song được play
        audio.onplay = function() {
            _this.isPlaying = true
            playBtns.forEach(playBtn => {
            playBtn.classList.add('active--audio') 
            } );
            cdThumbAnimate.play();
            cdThumbAnimate1.play()
            cdThumbAnimate2.play()
        } 

        //  KHI ÂN NÚT PHÁT TẤT CẢ
        playAlls.forEach(playAll => {
            playAll.onclick = function() {
                audio.play();
            }
        })

        // Khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false
            playBtns.forEach(playBtn => {
            playBtn.classList.remove('active--audio') 
            });
            cdThumbAnimate.pause();
            cdThumbAnimate1.pause();
            cdThumbAnimate2.pause()
        }
        // Xử lí khi tua song
        progress.forEach(setTime => {
            setTime.onchange = function(e) {
                audio.play()
                const seekTime = (audio.duration * e.target.value) / 100
                audio.currentTime = seekTime
                
                checkOnmouseAndTouch = true;
            }
        });

        //  loại bỏ sự kiện timeupdate liên tục
        let checkOnmouseAndTouch = true;
            progress.forEach(progressTime => {
                progressTime.onmousedown = function() {
                    checkOnmouseAndTouch = false;
                }

                progressTime.ontouchstart = function() {
                    checkOnmouseAndTouch = false;
                }
            })
            

        

        // Khi tiến độ bài hát thay đổi- auto song<=> time-progres
        audio.ontimeupdate = function() {
            if(audio.duration && checkOnmouseAndTouch) {
                const timeUpdate = Math.floor(audio.currentTime / audio.duration * 100)
                   progress.forEach(progressTime => {
                    progressTime.value = timeUpdate

                   })
            }
            // THỜI LƯỢNG BÀI HÁT
            const {currentTime, duration} = audio;
            
            formatTimes = function(number) {
                const minutes = Math.floor(number / 60);
                const seconds = Math.floor(number - minutes*60);
                return `${minutes < 10 ? '0' + minutes: minutes}:${seconds < 10 ? '0' + seconds: seconds}`;
            };

            if(!duration) {
                timeProgress.forEach(timeProgres => {
                    timeProgres.textContent = '00:00'
                })
            } else {
                timeProgress.forEach(timeProgres => {
                    timeProgres.textContent = formatTimes(duration);
                })
            }
            //  UPDATE TIME SONG

            remaningTimes.forEach(remaningTime => {
                remaningTime.textContent = formatTimes(currentTime);
            })
        };

        // ÂM LƯỢNG BÀI HÁT  'CHƯA CHỈNH SỬA'
        volumeBtn.onchange = function(e) {
            const seekVolume =  e.target.value / 100
            audio.volume = seekVolume       
        },

        // Khi next bài hát
        nextBtns.forEach(nextBtn => {
            nextBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandom();
                } else {
                _this.nextSong();
                }
                audio.play()
                _this.render()
                _this.scrollToactivesong()
    
            }
        })
        // 
        prevBtns.forEach(prevBtn => {
            prevBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandom();
                } else {
                _this.prevSong();
                }
                audio.play()
                _this.render()
                _this.scrollToactivesong()
            }
        })

        // Random bài hát
        randomBtns.forEach(randomBtn => {
            randomBtn.onclick = function(e) {
                _this.isRandom = !_this.isRandom
                _this.setConfig('isRandom', _this.isRandom);
                randomBtn.classList.toggle('active--primary', _this.isRandom)
            }
        })

        // XỬ LÍ AUTO NEXT SONG
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play();
            } else {
                nextBtns.forEach(nextBtn => {
                    nextBtn.click(); 
                })
            }
        };

        //XỬ LÍ LẶP LẠI SONG
        repeatBtns.forEach((repeatBtn, index) => {
            repeatBtn.onclick = function(e) {
                _this.isRepeat = !_this.isRepeat
                _this.setConfig('isRepeat', _this.isRepeat);
                repeatBtn.classList.toggle('active--primary', _this.isRepeat)
                
            };
        })

        // PLAYLIST lắng nghe hành vi vaod playlist__song
        playlists.forEach(playlist => {
            playlist.onclick = function(e) {
                const songNode = e.target.closest('.song__playlist:not(.active)')
        
                if(songNode || e.target.closest('.song__list-item')) {
                    //  Xử lí khi cklick vào song
                    if(songNode) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        _this.loadCurrentSong()
                        _this.render();
                        audio.play()
                    
                    }
    
                    if(e.target.closest('.song__list-item')) {
                        
                    }
                }
            };

        })

        // Mở RỘNG TAP FOOTER__PLAYER      
        footerFull.onclick = function(e) {
            const footerNode = e.target.closest('.player__container')

            if(footerNode || e.target.closest('.player__control')) {
                if(footerNode) {
                   footerFull.classList.add('active--full')
                };
                if( e.target.closest('.player__control')) {

                }
            }           
        };

        //  ĐÓNG TAB FOOTER__FULL
        closeFooterFull.onclick = function() {
            footerFull.classList.remove('active--full')
        }
    },
    
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    // THANH CUỘN AUTO ACTIVE SONG
    scrollToactivesong: function() {
        setTimeout(() => {
            $('.song__playlist.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            }) 
        }, 200)  
        
    },
    // RENDER BÀI ĐẦU
    loadCurrentSong: function() {
        headings.forEach(heading => {
            heading.textContent = this.currentSong.name
        });

        authors.forEach(author => {
            author.textContent = this.currentSong.author
        });
        
        cdThumb.style.background = `url('${this.currentSong.image}') no-repeat center / cover`
        cdThumb1.style.background = `url('${this.currentSong.image}') no-repeat center / cover`
       
        cdThumb2.style.background = `url('${this.currentSong.image}') no-repeat center / cover`
        audio.src = this.currentSong.song         
    },

    // NEXT / PREV SONG
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    // RANDOM SONG
    playRandom: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    // Chạy CONFIG
    loatConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },

    start: function() {
        // GÁN CẤU HÌNH VÀO ỨNG DỤNG
        this.loatConfig();

        this.defineProperties();

        this.render();

        this.handelEvent();

        this.loadCurrentSong();

        // lưu cấu hình vào localStorange

        // randomBtns.forEach(randomBtn => {
        //     randomBtn.classList.toggle('active--primary', this.isRandom)
        // });
        // repeatBtns.forEach(repeatBtn => {
        //     repeatBtn.classList.toggle('active--primary', this.isRepeat)
        // });

    }
}

app.start();
