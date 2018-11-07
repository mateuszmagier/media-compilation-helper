interface AudioCompilation {
  _id?: { $oid: string }; // struktura narzucona przez MongoDB
  name?: string;
  created?: Date;
  audiofiles: Array<AudioFile>;
}
