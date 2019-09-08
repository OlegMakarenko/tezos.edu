type score is record
    date : timestamp ;
    value : tez;
end

type score_list is map(nat, score)

type student is record
    name : string ;
    table : score_list ;
    score_count : nat ;
end

type students_storage is map(address , student);

function add_score (const student_address: address ; const students_storage : students_storage) : (list(operation) * students_storage) is
    block {
        const current_student : student = get_force(student_address, students_storage);

        const score : score = record
            value = amount;
            date = now;
        end;
        const score_list_current : score_list = current_student.table;
        score_list_current[current_student.score_count] := score;

        const updated_student : student = record
            name = current_student.name;
            table = score_list_current;
            score_count = current_student.score_count + 1n;
        end;

        students_storage[student_address] := updated_student;
        
        const receiver : contract(unit) = get_contract(student_address);
        const payoutOperation : operation = transaction(unit, amount, receiver);
        const operations : list(operation) = list
            payoutOperation
        end;
     } with ((nil : list(operation)), students_storage)


