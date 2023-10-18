function handleFileUpload(e) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.file);
  
    reader.onload = (event) => {
      const bstr = event.target.result;
      console.log("event.target.result", bstr);
      const wb = XLSX.read(bstr, { type: "binary" });
      console.log("XLSX.read(bstr, { type: 'binary' }",wb);
    };
    
  }