var firebaseConfig = {
    apiKey: "AIzaSyCIVWdpEFnG91750UYvRRbAssIz34cD1xs",
    authDomain: "appex-ufca.firebaseapp.com",
    databaseURL: "https://appex-ufca.firebaseio.com",
    projectId: "appex-ufca",
    storageBucket: "appex-ufca.appspot.com",
    messagingSenderId: "681227461511",
    appId: "1:681227461511:web:07b292ee6b08b38b"
};
var firebase = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

var ref = database.ref('sistemaSolar');

function get_sessoes() {
    let sessoes = ref.child('sessao');
    sessoes.get().then(function(snapshot) {
        let sessoes_ul = document.getElementById('sessoes_ul');
        
        snapshot.forEach(function(el){
            console.log(el.ref.key);
            let li = document.createElement('li');
            let aref = document.createElement('a');
            let nome = el.toJSON()['nome'];
            let mac = el.ref.key;
            aref.setAttribute('href', '/sessao/'+mac);
            aref.appendChild(document.createTextNode(`${nome} - MAC: ${mac}`));
            
            li.appendChild(aref);
            sessoes_ul.appendChild(li);
        });
    });
}

function play(arquivo) {
    var audio = new Audio(arquivo);
    audio.play();
}
