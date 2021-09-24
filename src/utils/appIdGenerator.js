import randomstring from 'randomstring';

const appIdGenerator = () => randomstring.generate({
  capitalization: 'uppercase',
  readable: true,
  length: 32,
});

export default appIdGenerator;
