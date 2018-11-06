interface AudioCompilation {
  _id?: { $oid: string }; // struktura narzucona przez MongoDB
  name: string;
  audiofiles?: Array<AudioFile>;
}
