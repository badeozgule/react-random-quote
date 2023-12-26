const RandomHueSelection = (props) => {
  let hue =  Math.floor(Math.random() * 345); //max hue can be 360
  return hue;
};

class GithubCorner extends React.Component {
  render() {
    const {
      url = '#',
      fill = "",
      color = "",
      fillHover = "",
      colorHover = "",
    } = this.props;

    return (
      <a
        style={{ "--gc-color": color , "--gc-fill": fill, "--gc-fill-hover": fillHover, "--gc-color-hover": colorHover }}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="github-corner"
        aria-label="View source on GitHub"
      >
        <svg width="80" height="80" viewBox="0 0 250 250" ariaHidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: "130px 106px"}} class="octo-arm"></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
        </svg>
      </a>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyBg: '',
      cardBg: '',
      hue: '',
      saturation: 70,
      lightness: 73,
      boxShadow: '',
      boxShadowColor: '',
      quotes: [
        {
          quote: "Donec quis urna id dui fringilla vestibulum.",
          author:"Joseph Trevino"
        },
        {
          quote: "Donec ut orci vitae elit dapibus elementum.",
          author:"Adrian Mendez"
        },
        {
          quote: "Fusce nec nibh posuere, pharetra ipsum sit amet, facilisis nisl.",
          author:"Draven Wu"
        },
        {
          quote: "Phasellus malesuada est a diam gravida, rutrum tincidunt turpis lacinia.",
          author:"Heidy Mccarthy"
        },
        {
          quote: "Pellentesque condimentum dui at lacinia posuere.",
          author:"Devon Rich"
        },
        {
          quote: "Etiam feugiat est id arcu commodo consequat.",
          author:"Jerome Ryan"
        },
        {
          quote: "Nunc sit amet mauris fermentum, semper velit ac, vulputate leo.",
          author:"Shea Peterson"
        },
        {
          quote: "Vivamus elementum nisi id neque scelerisque, vitae scelerisque lacus commodo.",
          author:"Aryanna Morrison"
        },
        {
          quote: "Praesent pretium dolor vel arcu lacinia, nec auctor velit faucibus.",
          author:"Lola Holloway"
        },
        {
          quote: "Fusce lobortis dolor ut feugiat semper.",
          author:"Mathias Velasquez"
        },
        {
          quote: "Vivamus at nulla vitae urna aliquet sodales.",
          author:"Sofia Mathis"
        },
        {
          quote: "Nam a nunc et dolor posuere ultrices eget ut lorem.",
          author:"Cierra Porter"
        },
        {
          quote: "Proin commodo risus pharetra odio egestas molestie.",
          author:"Rylee Ingram"
        },
        {
          quote: "Duis eu neque pulvinar, semper tellus sit amet, fermentum quam.",
          author:"Ahmed Waters"
        },
        {
          quote: "Donec molestie erat sit amet massa viverra semper.",
          author:"Jeremy Curry"
        },
        {
          quote: "Sed vitae felis et ipsum blandit tincidunt.",
          author:"Raina Gentry"
        },
        {
          quote: "Etiam viverra arcu quis risus iaculis elementum.",
          author:"Priscilla Robertson"
        },
        {
          quote: "Fusce tincidunt magna et augue sodales, vel vehicula diam suscipit.",
          author:"Gina Vang"
        },
        {
          quote: "Nam id sapien sed dui commodo maximus non eu est.",
          author:"Cara Vazquez"
        },
        {
          quote: "Donec quis purus at arcu vestibulum volutpat.",
          author:"Brenda Williams"
        },
        {
          quote: "Nullam eu quam a lacus varius luctus.",
          author:"Kenley Owen"
        },
        {
          quote: "Nunc id quam non mi venenatis sollicitudin ut vitae enim.",
          author:"Kayden Haney"
        },
        {
          quote: "Fusce volutpat lacus condimentum nunc posuere porta.",
          author:"Dayanara Sweeney"
        },
        {
          quote: "Mauris vitae nisi sed metus fermentum sagittis.",
          author:"Cheyenne Cortez"
        },
        {
          quote: "Donec rutrum mauris in condimentum maximus.",
          author:"Devin Villarreal"
        },
        {
          quote: "Quisque egestas sem vitae aliquet imperdiet.",
          author:"Maia Horton"
        },
        {
          quote: "Mauris eu ante dapibus, luctus sapien quis, congue nibh.",
          author:"Jake Farmer"
        },
        {
          quote: "Donec eu tortor vitae turpis hendrerit mattis vitae id sapien.",
          author:"Melanie Ryan"
        },
        {
          quote: "Aenean facilisis ipsum at consectetur mollis.",
          author:"Kelsey Hall"
        },
        {
          quote: "Vestibulum ornare sem eu mi ultrices, eu euismod orci suscipit.",
          author:"Kadence Fernandez"
        },
        {
          quote: "Pellentesque interdum risus ut mauris accumsan sollicitudin.",
          author:"Jasmin Shea"
        },
        {
          quote: "Cras eu leo ultricies, ultrices purus ac, pellentesque sem.",
          author:"Micah Villarreal"
        },
        {
          quote: "Maecenas mattis turpis vitae lacus maximus, vitae dapibus nibh fringilla.",
          author:"Esteban Hunt"
        }
      ],
      randomNumQuote: '',
      newQuoteRequested: false,
      cardHeight: null,
      isResizeActive: false,
    }
    
    this.randomQuoteSelection = this.randomQuoteSelection.bind(this);
    this.heightAnimation = this.heightAnimation.bind(this);
    
    this.resizeTimeout = undefined;
    this.resizeListener = this.resizeListener.bind(this);
    
    this.textRef = React.createRef();
    this.btnRef = React.createRef();
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
    this.randomQuoteSelection();
  };
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }
  
  resizeListener = () => {
    this.setState({ isResizeActive: true } , () => this.heightAnimation());
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.setState({ isResizeActive: false });
      }, 250);
  }
  
  
  heightAnimation = () => {
    const textHeight = this.textRef.current.offsetHeight;
    const buttonContainerHeight = this.btnRef.current.offsetHeight;
    this.setState({
      cardHeight: textHeight + buttonContainerHeight 
    });
  }
  
  randomColorSelection() {
    let hue = RandomHueSelection();
    this.setState({
      hue: hue,
      bodyBg: (
        'hsl(' + 
        hue + ', ' + 
        this.state.saturation + '%, ' +
        this.state.lightness + '%, 1)'
      ),
      cardBg: (
        'hsl(' + 
        hue + ', ' + 
        (this.state.saturation-15) + '%, ' +
        (this.state.lightness-15) + '%, 1)'
      ),
      boxShadow: (
      "2px 32px 32px -10px hsl(" + 
        hue + ', ' + 
        (this.state.saturation-25) + '%, ' +
        (this.state.lightness-40) + '%, 1)'
      ),
      boxShadowColor: (
        'hsl(' + 
        hue + ', ' + 
        (this.state.saturation-25) + '%, ' +
        (this.state.lightness-40) + '%, 1)'
      ),
    });
  }
  
  randomQuoteSelection() {
    this.randomColorSelection();
    let num =  Math.floor(Math.random() * (this.state.quotes.length - 1));
    this.setState({
      randomNumQuote: num,
      bgColor: RandomHueSelection()
    }, ()=> {    
      this.heightAnimation();
    });

    return num;
  }
  
  shareQuote = (social) => {
    const url = "https://codepen.io/badeozgule/full/abErMqX";
    const filterArray = this.state.quotes.filter((i, index) => (index === this.state.randomNumQuote));
    const selectedQuote = filterArray.map(i => i.quote);
    const selectedAuthor = filterArray.map(i => i.author);
    let winOptions = "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600";
    // if (social === "facebook")  {
    //   console.log("facebook");
    //   window.open("https://www.facebook.com/share.php?u=" + url + "&t=" + selectedQuote, "", winOptions);
    // } else if (social === "twitter") {
    //   console.log("twitter");
    //   window.open("https://twitter.com/share?&text=" + selectedQuote + "%0D%0A&url=" + url + "%0D%0A&hashtags=" + selectedAuthor, "", winOptions);
    // }
    switch (social) {
      case "facebook":
        // window.open(URL, '_blank');
        facebookShareUrl = 
        window.open('https://www.facebook.com/sharer.php?s=100&p[title]=' + selectedQuote + '&p[summary]=' + selectedAuthor + '&p[url]=' + url,  "", winOptions);
        // window.open("https://www.facebook.com/share.php?u=" + url + "&t=" + selectedQuote, "", winOptions);
        console.log("hey");
        break;
      case "twitter":
        window.open(
          "https://twitter.com/intent/tweet?&text=" +
          selectedQuote.slice(-1) +
          " by " +
          selectedAuthor + 
          "%0D%0A&url=" +
          url +
          "%0D%0A&hashtags=" +
          "codepen",
          "_top",
          winOptions
        );
        console.log("hey");
        break;
    }
  }
  
  render() { 
    const bgColor = this.props.colorHue;
    const filterArray = this.state.quotes.filter((i, index) => (index === this.state.randomNumQuote));
    const textColor = `hsl(${this.state.hue},${this.state.saturation-25}%,${this.state.lightness-40}%, 0.7)`;
    const textColorHover = `hsl(${this.state.hue},${this.state.saturation-25}%,${this.state.lightness-40}%, 1)`;
    console.log(filterArray);
    const renderQuotes = filterArray.map(i => 
      <div className="text-container" ref={this.textRef}>
        <p id="text">{i.quote}</p>
        <p id="author">{i.author}</p>
      </div>                               
    );
    return(
      <>
        <GithubCorner 
          url="https://github.com/badeozgule/react-random-quote"
          fill={this.state.cardBg}
          color="#fff"
          fillHover={textColorHover}
          colorHover="#fff"
        />
        <div id="body" 
          style={{
            backgroundColor: this.state.bodyBg
          }}
          className={`${this.state.isResizeActive ? "resize-active" : ""}`}
          >
          <div id="quote-box">
            <div style={{backgroundColor: this.state.cardBg, boxShadow: this.state.boxShadow, height: this.state.cardHeight}}>
              <i class="fa-solid fa-quote-left"></i>
              {renderQuotes}
              <div ref={this.btnRef} class="button-container">
                <div>
                  <button>
                    <a href='javascript:void(0)' onClick={()=>this.shareQuote("twitter")} id="tweet-quote">
                      <i class="fa-brands fa-twitter" style={{color: this.state.cardBg}}></i>
                    </a>
                  </button>
                  <button>
                    <a href='javascript:void(0)' onClick={()=>this.shareQuote("facebook")} id="facebook-quote">
                      <i class="fa-brands fa-facebook-f" style={{color: this.state.cardBg}}></i>
                    </a>
                  </button>
                </div>
                <button onClick={this.randomQuoteSelection} id="new-quote" style={{color: this.state.cardBg}}>New Quote</button>
              </div>  
            </div>
          </div>
          <h5 class="by" style={{"--color": textColor, "--hoverColor": textColorHover}}>Designed and coded by&nbsp;
            <a target="_blank" href="https://codepen.io/badeozgule">Bade Ozgule</a>
            </h5>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("react"));