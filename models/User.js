const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// Schema that makes our user model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: {
          validator: () => Promise.resolve(false),
          message: 'Email validation failed'
        }
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
      },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
  },
  {
    //Mongoose provides the toJSON and toObject schema options for transforming Objects following a MongoDb query. Here, we override the default behavior and request that virtuals be included in our answer.
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//Make a virtual property called "friendCount" that, when accessed, returns the size of the user's "friends" array field.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });
  

// creates our User model
const User = model('user', userSchema);

module.exports = User;