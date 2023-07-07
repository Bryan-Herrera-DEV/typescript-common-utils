import { WritableKeys } from ".";
import { expectType } from "tsd";

describe("[Test] WritableKeys", () => {
  it("returns the writable keys of a given object", () => {

    type MiObjeto = {
      readonly soloLectura: string;
      escritura: number;
      otroEscritura: boolean;
    };

    // Esperamos que los tipos sean los correctos.
    expectType<"escritura" | "otroEscritura">(null as any as WritableKeys<MiObjeto>);
  });
});
