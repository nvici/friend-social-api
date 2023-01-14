const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema that makes our thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      require: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Make a virtual property called "reactionCount" that, when accessed, returns the size of the thought's "reactions" array field.
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

// creates the thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;