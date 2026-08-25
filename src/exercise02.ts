export function transcribeDNA(dna: string): string {
    let rna: string = "";
    for (const chr of dna) {
        if (chr == 'A') { 
            rna += 'U'; 
        } else if (chr == 'T') {
            rna += 'A';
        } else if (chr == 'C') {
            rna += 'G';
        } else if (chr == 'G') {
            rna += 'C';
        } else {
            throw new Error("There was an invalid character in the DNA script: " + chr);
        }
    }
  return rna;
}
