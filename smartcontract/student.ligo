type score is record
    date : timestamp ;
    value : int;
end

type score_list is list(score)

type student is record
    name : string ;
    table : score_list ;
    score_count : int ''
end

type students_storage is map(address , Student);

function add_score (const student_address: address ; var students_storage : students_storage) : (list(operation) * students_storage) is
    begin
        const current_student : student = get_force(student_address, students_storage);
        current_student.table[current_student.score_count].score := amount;
        students_storage[address] := current_student;

        const receiver : contract(unit) = get_contract(ownerAddress);
        const payoutOperation : operation = transaction(unit, amount, receiver);
        const operations : list(operation) = list
            payoutOperation
        end;
    end with ((nil : list(operation)), students_storage)


