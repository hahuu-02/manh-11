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
            image:'./assets/img/imgae/linh.jpg' ,
            time: '5:58',
            song: './data/music-playlist/Ai chung tình được mãi - Đinh Tùng Huy _ Dunghoangpham Cover.mp3',
        },
        {
            name: 'Có Hẹn Với Thanh Xuân',
            author: 'Diệu Linh',
            time: '4:19',
            image:'./assets/img/imgae/2934468294de598000cf.jpg' ,
            song: './data/music-playlist/có hẹn với thanh xuân - MONSTAR _ official music video.mp3',
        },
        {
            name: 'Charlie Puth',
            author: 'Diệu Linh',
            time: '4:19',
            image:'./assets/img/imgae/2934468294de598000cf.jpg' ,
            song: './data/music-playlist/Charlie Puth - Attention _Official Video_.mp3',
        },
        {
            name: 'Yêu Đừng Sợ Đau',
            author: 'Diệu Linh',
            time: '3:52',
            image:'./assets/img/imgae/3f8cbb77692ba475fd3a.jpg',
            song: './data/music-playlist/Yêu Đừng Sợ Đau (Lofi Ver.) - Ngô Lan Hương x Freak D.mp3',
        },
        {
            name: 'Dịu Dàng Em Dến',
            author: 'Diệu Linh',
            time: '3:52',
            image:'./assets/img/imgae/3f8cbb77692ba475fd3a.jpg',
            song: './data/music-playlist/Dịu Dàng Em Đến - ERIK x Ryan「Lo - Fi Version by 1 9 6 7」_ Official Music Video.mp3',
        },
        {
            name: 'Buồn Nghe Mấy Bài Lofi Này Nhé',
            author: 'Diệu Linh',
            time: '3:52',
            image:'./assets/img/imgae/3f8cbb77692ba475fd3a.jpg',
            song: './data/music-playlist/lofi.mp3',
        },
        {
            name: 'Cô Ấy Nói',
            author: 'Diệu Linh',
            time: '3:57',
            image:'./assets/img/imgae/791100ddd2811fdf4690.jpg' ,
            song: './data/music-playlist/CÔ ẤY NÓI - NGÔ ANH ĐẠT _ OFFICIAL LYRICS VIDEO.mp3',
        },
        {
            name: 'Quên Người Đã Quá Yêu ',
            author:' Diệu Linh',
            time: '5:11',
            image:'./assets/img/imgae/829edd4d0f11c24f9b00.jpg' ,
            song: './data/music-playlist/Quên Người Đã Quá Yêu (Lofi Ver.) - Hà Duy Thái x Freak D x DC Tâm.mp3',
        },
        {
            name: 'Đã Hết Rồi',
            author: 'Diệu Linh',
            image:'./assets/img/imgae/8f6b5f9c8dc0409e19d1.jpg' ,
            song: './data/music-playlist/Đã Hết Rồi (Lofi Ver.) - Tika Tùng Anh x Linh Hương Luz x Freak D.mp3',
        },
        {
            name: 'Until You',
            author: 'Diệu Linh',
            time: '5:47',
            image:'./assets/img/imgae/e178b5db6787aad9f396.jpg' ,
            song: './data/music-playlist/Shayne Ward - Until You (Audio).mp3',
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
