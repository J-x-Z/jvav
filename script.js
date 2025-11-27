// 动态弹幕评论文字墙展示
const comments = [
  "jvav就是我们写Java时的真实写照！",
  "初学者都得经历的魔幻拼写：jvav",
  "用jvav来吐槽复杂冗长的代码结构",
  "这视频太带感了，弹幕文化真棒！",
  "每次调试都想喊：jvav再现！",
  "学习Java就是一场jvav的修行",
  "大佬们的吐槽让我笑喷",
  "jvav梗传遍了整个开发圈",
  "视频里的弹幕真实又有趣",
  "从jvav学到的知识点真心多"
];

const commentContainer = document.getElementById(comment-wall);

fun  const spanEl = document.createElement(spa c  spanEl.textContent = text;
  spanEl.style.s s  spanEl.style.setProperty( s  spanEl.className = comment;
  return spanEl; s  return spanEl;
}

function r}

function ini

fun  comments.forEach((comm c    const el = createCommentElement(com      commentContainer.appendChild(el);
  });
}

window.o    });
}

window.onload = () => {
  i }}

w

win  initComments();
};
E i};
