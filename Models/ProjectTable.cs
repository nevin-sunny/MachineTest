﻿using System;
using System.Collections.Generic;

namespace FinalMachineTest.Models
{
    public partial class ProjectTable
    {
        public ProjectTable()
        {
            RequestTable = new HashSet<RequestTable>();
        }

        public int ProjectId { get; set; }
        public string ProjectName { get; set; }

        public virtual ICollection<RequestTable> RequestTable { get; set; }
    }
}
