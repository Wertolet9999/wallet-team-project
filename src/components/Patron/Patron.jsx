import {
  Ball,
  Dog,
  DogBody,
  DogEar,
  DogEars,
  DogEye,
  DogEyes,
  DogHead,
  DogMuzzle,
  DogTail,
  DogTongue,
  DogTorso,
} from './Patron.styled';

export const Patron = () => {
  return (
    <>
      <Dog>
        <DogBody>
          <DogTail>
            <DogTail>
              <DogTail>
                <DogTail>
                  <DogTail>
                    <DogTail>
                      <DogTail>
                        <DogTail></DogTail>
                      </DogTail>
                    </DogTail>
                  </DogTail>
                </DogTail>
              </DogTail>
            </DogTail>
          </DogTail>
        </DogBody>
        <DogTorso></DogTorso>
        <DogHead>
          <DogEars>
            <DogEar></DogEar>
            <DogEar></DogEar>
          </DogEars>
          <DogEyes>
            <DogEye></DogEye>
            <DogEye></DogEye>
          </DogEyes>
          <DogMuzzle>
            <DogTongue></DogTongue>
          </DogMuzzle>
        </DogHead>
      </Dog>

      <Ball tabindex="0"></Ball>
    </>
  );
};
