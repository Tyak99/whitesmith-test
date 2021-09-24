import randomstring from 'randomstring';

const appIdGenerator = () => randomstring.generate({
  capitalization: 'uppercase',
  readable: true,
});

export default appIdGenerator;
