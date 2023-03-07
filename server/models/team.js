const { Schema,model } = require("mongoose");
const userSchema = require('./user');
const companySchema = require('./company');
const projectSchema = require('./project');

const teamSchema = new Schema({
  teamId: {
    // type: String,
    type: Schema.Types.ObjectId
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  project: [{
    type: Schema.Types.ObjectId,
    ref: 'project'
  }]
});

const Team = model('team',teamSchema);

module.exports = Team;
