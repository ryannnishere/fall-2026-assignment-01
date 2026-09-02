import fs from 'fs';

export type Gradebook = {
    // Formatting expected to be the same for subject names
    [studentName: string]: {
        [subject: string]: number;
    };
}

export function calculateSubjectAverage(subject: string): number {
    const raw = fs.readFileSync('data/gradebook.json', 'utf-8');
    const gradebook: Gradebook = JSON.parse(raw);

    const scores = Object.values(gradebook)
        .map((grades) => grades[subject])
        .filter((score): score is number => score != undefined);
    const total = scores.reduce((sum, score) => sum + score, 0);

    // If the subject doesn't exist in the gradebook, it will divide by 0. 
    // This if statement checks for that and returns 0 if it doesn't exist.
    if (scores.length === 0) { 
        console.log("Error: Subject " + subject + " was not found in the gradebook.");
        return 0; 
    }
    return total / scores.length;
}
