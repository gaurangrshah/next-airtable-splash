// maps over the records, calling minifyRecord, giving us required data
export const getMinifiedRecords = (records) => {
  if (!Array.isArray(records)) return minifyRecord(records);
  return records.map((record) => minifyRecord(record));
};

// gets the data we want and puts it into variables we can reference
export const minifyRecord = (record) => {
  return {
    id: record?.id,
    fields: record?.fields,
  };
};
