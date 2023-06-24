import { DeepReadonly } from './';
import { ExampleObjectOne } from "./../../../test/utils/ExampleObjectData"

describe('[Test] DeepReadonly', () => {
  it('no permite modificar los datos', () => {

    function transformarAReadonly(): DeepReadonly<typeof ExampleObjectOne> {
      return ExampleObjectOne;
    }
    const datosReadonly = transformarAReadonly();

    expect(datosReadonly.user.name).toEqual('John Doe');
    expect(datosReadonly.user.details.age).toEqual(30);
    expect(datosReadonly.user.details.address.street).toEqual('street 123');
  });
});
