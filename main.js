function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
    var vertices_left = [
        -0.8, -0.6,  1, 1, 0.7, 
        -0.2, -0.6,  1, 1, 0.7, 
        -0.8, -0.2,  1, 1, 0.7, 

        -0.2, -0.2,  1, 1, 0.7, 
        -0.2, -0.6,  1, 1, 0.7, 
        -0.8, -0.2,  1, 1, 0.7, 

        -0.8, -0.2,  0.2, 0.2, 0.2,
        -0.75, 0, 0.2, 0.2, 0.2,
        -0.2, -0.2, 0.2, 0.2, 0.2,

        -0.25, 0, 0.2, 0.2, 0.2,
        -0.75, 0, 0.2, 0.2, 0.2,
        -0.2, -0.2, 0.2, 0.2, 0.2,

        -0.7, 0.2, 0.5, 0.5, 0.5, 
        -0.75, 0, 0.5, 0.5, 0.5, 
        -0.65, 0, 0.5, 0.5, 0.5, 

        -0.7, 0.2, 0.5, 0.5, 0.5, 
        -0.6, 0.2, 0.5, 0.5, 0.5, 
        -0.65, 0, 0.5, 0.5, 0.5, 

        -0.6, 0.2, 0.5, 0.5, 0.5, 
        -0.65, 0, 0.5, 0.5, 0.5, 
        -0.55, 0.09, 0.5, 0.5, 0.5, 

        -0.6, 0.2, 0.9, 0.9, 0.9, 
        -0.3, 0.2, 0.9, 0.9, 0.9, 
        -0.55, 0.09, 0.9, 0.9, 0.9, 

        -0.25, 0.0, 0.9, 0.9, 0.9, 
        -0.65, 0, 0.9, 0.9, 0.9, 
        -0.55, 0.09, 0.9, 0.9, 0.9, 

        -0.25, 0.0, 0.9, 0.9, 0.9, 
        -0.3, 0.2, 0.9, 0.9, 0.9,  
        -0.55, 0.09, 0.9, 0.9, 0.9, 

        -0.6, 0.6, 0.0, 0.0, 1, 
        -0.7, 0.2, 0.0, 0.0, 1,
        -0.4, 0.6, 0.0, 0.0, 1,

        -0.3, 0.2, 0.0, 0.0, 1,  
        -0.7, 0.2, 0.0, 0.0, 1,
        -0.4, 0.6, 0.0, 0.0, 1,

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.7, -0.1, 0.5, 0.5, 0.5,
        -0.671, -0.034, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.7, -0.1, 0.5, 0.5, 0.5,
        -0.68, -0.166, 0.5, 0.5, 0.5,

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.5, -0.1, 0.5, 0.5, 0.5,
        -0.533, -0.027, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.5, -0.1, 0.5, 0.5, 0.5,
        -0.524, -0.163, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.6, -0.013, 0.5, 0.5, 0.5,
        -0.671, -0.034, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.6, -0.013, 0.5, 0.5, 0.5,
        -0.533, -0.027, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.6, -0.18, 0.5, 0.5, 0.5,
        -0.68, -0.166, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.6, -0.18, 0.5, 0.5, 0.5,
        -0.524, -0.166, 0.5, 0.5, 0.5, 

        -0.844, -0.644, 0.33, 0.33, 0.33,
        -0.8, -0.6, 0.5, 0.5, 0.5,
        -0.8, -0.5, 0.7, 0.7, 0.7,

        -0.844, -0.644, 0.33, 0.33, 0.33,
        -0.8, -0.6, 0.5, 0.5, 0.5,
        -0.2, -0.6, 0.33, 0.33, 0.33,

    ];
  
    var vertices_right = [
        0.1, -0.4,  1, 1, 0.7, 
        0.9, -0.4,  1, 1, 0.7, 
        0, -0.2,  1, 1, 0.7, 

        1, -0.2,  1, 1, 0.7, 
        0.9, -0.4,  1, 1, 0.7, 
        0, -0.2,  1, 1, 0.7,

        0, -0.2, 0.2, 0.2, 0.2,
        0.2, 0.6, 0.2, 0.2, 0.2,
        0.2, -0.2, 0.2, 0.2, 0.2,
  
        0.32, 0.6, 0.2, 0.2, 0.2,
        0.2, 0.6, 0.2, 0.2, 0.2,
        0.2, -0.2, 0.2, 0.2, 0.2,

        0.2, -0.2, 0.9, 0.9, 0.9,
        0.4, -0.2, 0.9, 0.9, 0.9,
        0.32, 0.6, 0.9, 0.9, 0.9,

        0.44, 0.6, 0.9, 0.9, 0.9,
        0.4, -0.2, 0.9, 0.9, 0.9,
        0.32, 0.6, 0.9, 0.9, 0.9,

        0.4, -0.2, 0.0, 0.0, 1,
        1, -0.2, 0.0, 0.0, 1,
        0.44, 0.6, 0.0, 0.0, 1,

        0.8, 0.6, 0.0, 0.0, 1,
        1, -0.2, 0.0, 0.0, 1,
        0.44, 0.6, 0.0, 0.0, 1,
    ];
  
    var vertices = [...vertices_left, ...vertices_right]; 
  
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uTranslate;
        void main(){
            gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0);
            vColor = aColor;
        }
    `;
  
    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
  
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
  
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
  
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
  
    var speed = 0.0046;
    var positiony = 0;
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
    
    function render() {
        if (positiony > 0.4 || positiony < -0.6) speed = -speed;
        positiony += speed;
        const left = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, 0.0, 0.0, 1.0,
        ]
        const right = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, positiony, 0.0, 1.0,
        ]
        gl.clearColor(0.35, 0.83, 0.51, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniformMatrix4fv(uTranslate, false, left);
        gl.drawArrays(gl.TRIANGLES, 0, vertices_left.length/5);
        gl.uniformMatrix4fv(uTranslate, false, right);
        gl.drawArrays(gl.TRIANGLES, vertices_left.length/5, vertices_right.length/5);     
        requestAnimationFrame(render);
    }
    render();
  }