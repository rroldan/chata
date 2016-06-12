import Ember from 'ember';
const {run} = Ember;

export default Ember.Service.extend(Ember.Evented,{
  socket: null,
  init() {
    this._super();
    let socket = new SockJs('http:localhost:7000');
    socket.addEventListener('message',run.bind(this,(event)=>{
      this.trigger('messageReceived',event.data);
      cosole.log(event.data);
    }));
    this.set('socket',socket);
  },
  sendInfo(message) {
    this.get('socket').send(message);
  }
});
