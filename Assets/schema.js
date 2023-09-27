const Comment = new Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
    buff: Buffer
  });
  
  Comment.path('name').set(function(v) {
    return capitalize(v);
  });

  Comment.pre('save', function(next) {
    notify(this.get('email'));
    next();
  });
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;
  
  const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
  });
  const mongoose = require('../../lib');
const schema = mongoose.Schema;

const MyModel = mongoose.model('Social Netowrk');
const instance = new MyModel();
instance.my.key = 'welcome';
await instance.save();

await MyModel.find({});
